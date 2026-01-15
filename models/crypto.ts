import { query } from "@/infra/database";
import { ListingLatestResponse } from "@/schemas/coin-market-cap";
import { Client, QueryConfig } from "pg";

const API_V1_ENDPOINT = "v1/cryptocurrency";

type ErrorMessage = {
	error: string;
};

enum ENDPOINTS {
	LISTING_LATEST = `${API_V1_ENDPOINT}/listings/latest`,
}

export class CMCModel {
	coinMarketCapUrl: string;
	coinMarketCapApiKey: string;

	constructor() {
		this.coinMarketCapUrl = "https://pro-api.coinmarketcap.com";
		this.coinMarketCapApiKey = process.env.COINMARKETCAP_API || "";
	}

	private defaultHeader() {
		return {
			"X-CMC_PRO_API_KEY": this.coinMarketCapApiKey,
		};
	}

	async listingLatest(
		start: number = 1,
		limit: number = 200
	): Promise<ListingLatestResponse> {
		const urlParameters = new URLSearchParams({
			start: String(start),
			limit: String(limit),
		});

		try {
			const response = await fetch(
				`${this.coinMarketCapUrl}/${ENDPOINTS.LISTING_LATEST}?${urlParameters}`,
				{
					method: "GET",
					headers: this.defaultHeader(),
				}
			);

			const data = (await response.json()) as ListingLatestResponse;
			return data;
		} catch (error) {
			console.error(error);
			throw error;
		}
	}

	async updateCurrencyListingInformation() {
		const top200Coins = await this.listingLatest(1, 200);

		if (top200Coins.status.error_code !== 0) {
			return;
		}

		const queryResults = [];
		let client;
		try {
			client = new Client();
			await client.connect();
			await client.query("BEGIN");

			for (const coinObj of top200Coins.data) {
				const valuesToBeInsert = [
					coinObj.id,
					coinObj.name,
					coinObj.symbol,
					coinObj.date_added,
				];

				const queryObject: QueryConfig = {
					name: `Query to updated ${coinObj.name} is cmc_currency`,
					text: "INSERT INTO cmc_currency(cmc_id, name, symbol, date_added) VALUES ($1, $2, $3, $4)",
					values: valuesToBeInsert,
				};

				const result = await client.query(queryObject);
				queryResults.push(valuesToBeInsert);
			}

			await client.query("COMMIT");
		} catch (error) {
			await client?.query({ text: "ROLLBACK" });
			throw error;
		} finally {
			client?.end();
		}

		return queryResults;
	}

	async allCryptoCurrencyAvailable() {}
	async getCurrencyInformation() {}
}
