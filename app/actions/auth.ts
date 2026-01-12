"use server";

import { auth } from "@/lib/auth";
import {
	loginSchema,
	registerSchema,
	ValidadeSchema,
	validadeSchema,
} from "@/schemas/auth";
import { APIError } from "better-auth";
import { headers } from "next/headers";
import { redirect } from "next/navigation";

type SignupAction = ValidadeSchema & { betterAuthErrors?: string[] };

export async function signUpAction(
	prevState: SignInAction,
	formData: FormData
): Promise<SignupAction> {
	const email = formData.get("email") as string;
	const password = formData.get("password") as string;
	const name = formData.get("name") as string;

	const parsedValues = validadeSchema(
		{ email, password, name },
		registerSchema
	);

	if (!parsedValues.success) {
		return parsedValues;
	}

	try {
		await auth.api.signUpEmail({
			body: { email, name, password },
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
		await auth.api.signInEmail({
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
	await auth.api.signOut({ headers: await headers() });

	redirect("/");
}
