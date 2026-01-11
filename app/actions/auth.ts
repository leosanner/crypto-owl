"use server";

import { auth } from "@/lib/auth";
import { loginSchema, ValidadeSchema, validadeSchema } from "@/schemas/auth";
import { APIError } from "better-auth";
import { headers } from "next/headers";
import { redirect } from "next/navigation";

export async function signUpAction(formData: FormData) {
	const email = formData.get("email") as string;
	const password = formData.get("password") as string;
	const name = formData.get("name") as string;

	await auth.api.signUpEmail({
		body: { email, name, password },
	});
}

type SignInAction = ValidadeSchema & { betterAuthErrors?: string[] };

export async function signInAction(
	prevState: SignInAction,
	formData: FormData
): Promise<SignInAction> {
	const email = formData.get("email") as string;
	const password = formData.get("password") as string;

	const parsedValues = validadeSchema({ email, password }, loginSchema);
	if (!parsedValues.success) {
		return parsedValues;
	}

	try {
		const response = await auth.api.signInEmail({
			body: { email, password },
		});
	} catch (error) {
		if (error instanceof APIError) {
			return {
				success: false,
				betterAuthErrors: [error.message],
			};
		}
	}
	redirect("/");
}

export async function signOutAction(formData: FormData) {
	auth.api.signOut({ headers: await headers() });

	redirect("/");
}
