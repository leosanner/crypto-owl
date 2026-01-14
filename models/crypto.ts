import { ListingLatestResponse } from "@/schemas/coin-market-cap";

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
	): Promise<ListingLatestResponse | ErrorMessage> {
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
			if (data) return data;
		} catch (error) {
			console.error(error);
			throw error;
		} finally {
			return {
				error: "",
			};
		}
	}
	async allCryptoCurrencyAvailable() {}
	async getCurrencyInformation() {}
	async updateCurrencyInformation() {}
}
