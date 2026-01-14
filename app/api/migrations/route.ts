import { getNewClient } from "@/infra/database";
import migrationRunner, { RunnerOption } from "node-pg-migrate";
import { join } from "node:path";
import { ClientBase } from "pg";

async function makeMigrations(dbClient: ClientBase, dryRun: boolean) {
	const migrationOptions: RunnerOption = {
		dbClient: dbClient,
		dryRun: dryRun,
		dir: join("infra", "migrations"),
		direction: "up",
		verbose: true,
		migrationsTable: "pgmigrations",
		checkOrder: false,
	};

	const migrationsResponse = await migrationRunner(migrationOptions);

	return migrationsResponse;
}

export async function POST(req: Request) {
	let dbClient;

	try {
		dbClient = await getNewClient();
		await dbClient.connect();

		const migrationsResponse = await makeMigrations(dbClient, false);

		return Response.json({ migrations: migrationsResponse });
	} catch (error) {
		console.error(error);
		return Response.json({ error: "Internal server error" }, { status: 500 });
	} finally {
		await dbClient?.end();
	}
}

export async function GET() {
	let dbClient;

	try {
		dbClient = await getNewClient();
		await dbClient.connect();

		const migrationsResponse = await makeMigrations(dbClient, true);

		return Response.json({ migrations: migrationsResponse });
	} catch (error) {
		console.error(error);
		return Response.json({ error: "Internal server error" }, { status: 500 });
	} finally {
		await dbClient?.end();
	}
}
