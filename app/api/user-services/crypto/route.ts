import { createHash, randomBytes } from "crypto";
import { headers } from "next/headers";
import { NextResponse } from "next/server";

const generateRandomString = (length: number = 32) => {
	return randomBytes(length).toString("hex");
};

export async function GET() {
	const headerList = await headers();
	const authorization = headerList.get("authorization");
	const cronSecret =
		process.env.CRON_SECRET ||
		createHash("sha256").update(generateRandomString()).digest("hex");

	if (authorization === `Bearer ${cronSecret}`) {
		const dateStart = Date.now();

		// doSomenthing
		const wait = (time: number) =>
			new Promise((resolve) => setTimeout(resolve, time));

		await wait(2000);

		//
		const dateEnd = Date.now();
		const date = new Date();
		const timeToExecuteInSeconds = (dateEnd - dateStart) / 1000;

		return NextResponse.json(
			`Authorized, cron job executed at ${date}, took ${timeToExecuteInSeconds.toFixed(
				3
			)} seconds to execute.`,
			{
				status: 200,
			}
		);
	}

	return NextResponse.json("Unauthorized", { status: 401 });
}
