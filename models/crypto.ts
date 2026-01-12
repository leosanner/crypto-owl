export class CryptoModel {
	coinMarketCapUrl: string;

	constructor() {
		this.coinMarketCapUrl = "https://pro-api.coinmarketcap.com";
	}

	async allCryptoCurrencyAvailable(start: number = 1, limit: number = 5000) {}
	async getCurrencyInformation() {}
	async updateCurrencyInformation() {}
}
