import { Pool, QueryConfig } from "pg";

export async function query(queryObject: QueryConfig) {
	let client;

	try {
		client = await getNewPool();
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

export async function getNewPool() {
	return new Pool({
		user: process.env.PGUSER,
		database: process.env.PGDATABASE,
		password: process.env.PGPASSWORD,
		host: process.env.PGHOST,
		ssl: true,
	});
}
