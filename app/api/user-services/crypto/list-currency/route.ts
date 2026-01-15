import { CMCModel } from "@/models/crypto";
import { headers } from "next/headers";
import { NextResponse } from "next/server";

export async function GET() {
	const headerList = await headers();
	const authorization = headerList.get("authorization");

	if (authorization !== `Bearer ${process.env.CRON_SECRET}`) {
		return NextResponse.json({
			status: 403,
			body: { error: "Invalid credentals" },
		});
	}

	const cmcModel = new CMCModel();
	const queryResults = await cmcModel.updateCurrencyListingInformation();

	return NextResponse.json({
		status: 200,
		body: {
			results: queryResults,
		},
	});
}
