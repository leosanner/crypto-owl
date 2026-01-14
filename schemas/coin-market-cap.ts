type ApiStatus = {
	timestamp: string; // ISO date
	error_code: number;
	error_message: string | null;
	elapsed: number;
	credit_count: number;
};

export type CoinMarketCapIdMap = {
	data: {
		id: number;
		rank: number;
		name: string;
		symbol: string;
		slug: string;
		isActive: number;
		first_historical_data: Date;
		last_historical_data: Date;
		platform: {
			id: number;
			symbol: string;
			name: string;
			slug: string;
			token_address: string;
		};
	}[];
	status: ApiStatus;
};

type QuoteCurrency = {
	price: number;
	volume_24h: number;
	percent_change_1h: number;
	percent_change_24h: number;
	percent_change_7d: number;
	market_cap: number;
	last_updated: string; // ISO date
};

type Quote = Record<string, QuoteCurrency>;

type CryptoData = {
	id: number;
	name: string;
	symbol: string;
	slug: string;
	cmc_rank?: number;
	num_market_pairs: number;
	circulating_supply: number;
	total_supply: number;
	max_supply: number | null;
	last_updated: string; // ISO date
	date_added: string; // ISO date
	tags: string[];
	platform: null | {
		id: number;
		name: string;
		symbol: string;
		slug: string;
		token_address: string;
	};
	quote: Quote;
};

export type ListingLatestResponse = {
	data: CryptoData[];
	status: ApiStatus;
};
