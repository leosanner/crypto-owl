import { Client, QueryConfig } from "pg";

export async function query(queryObject: QueryConfig) {
	let client;

	try {
		client = await getNewClient();
		await client.connect();

		const result = await client.query(queryObject);
		return result;
	} catch (error) {
		console.error(error);
		throw error;
	} finally {
		client?.end();
	}
}

export async function getNewClient() {
	return new Client({
		user: process.env.PGUSER,
		database: process.env.PGDATABASE,
		password: process.env.PGPASSWORD,
		host: process.env.PGHOST,
		ssl: true,
	});
}
