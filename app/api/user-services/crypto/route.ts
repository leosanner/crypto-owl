import { UserModel } from "@/models/user";
import { validateSchema } from "@/schemas/auth";
import { NextRequest, NextResponse } from "next/server";
import { z } from "zod";

type ResponseType = {
	userId: string;
	secretKey: string;
};

const ResponseSchema = z.object({
	userId: z.string().min(10).max(50),
	secretKey: z.string().min(10).max(70),
});

async function validatePostCredentials(obj: ResponseType) {
	const userModel = new UserModel();
	const userRole = await userModel.getUserRole(obj.userId);

	if (!userRole || userRole !== "allowedCron") {
		return false;
	}

	if (obj.secretKey === process.env.CRON_SECRET) {
		return true;
	}

	return false;
}

export async function POST(req: NextRequest, context: { params: Promise<{}> }) {
	const requestBody = await req.json();
	const { userId, secretKey } = requestBody;

	const { success, errors } = validateSchema(
		{ userId, secretKey },
		ResponseSchema
	);

	if (!success) {
		return NextResponse.json({ error: errors }, { status: 401 });
	}

	const allowedPostCredentials = await validatePostCredentials({
		userId,
		secretKey,
	});

	if (allowedPostCredentials) {
		return NextResponse.json(
			{ content: "Allowed credentials, persuing cron operations" },
			{ status: 200 }
		);
	}

	return NextResponse.json(
		{ error: "Unauthorized, please verify your credentials" },
		{ status: 401 }
	);
}
