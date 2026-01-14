import { NextRequest, NextResponse } from "next/server";

export function GET(req: NextRequest, context: { params: Promise<{}> }) {
	console.log("Endpoint chaamado");

	return NextResponse.json({ status: 200, content: "All right" });
}
