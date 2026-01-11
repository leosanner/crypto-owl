"use server";

import { auth } from "@/lib/auth";
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

	redirect("/");
}

export async function signInAction(formData: FormData) {
	const email = formData.get("email") as string;
	const password = formData.get("password") as string;

	try {
		const response = await auth.api.signInEmail({
			body: { email, password },
		});
	} catch (error) {
		if (error instanceof APIError) {
			console.error(
				`Error msg: ${error.message}\n\nError code: ${error.statusCode}\n\nCause: ${error.cause}`
			);
		}
	}
	redirect("/");
}

export async function signOutAction(formData: FormData) {
	auth.api.signOut({ headers: await headers() });

	redirect("/login");
}
