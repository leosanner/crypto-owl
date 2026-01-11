"use client";

import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import {
	Card,
	CardContent,
	CardDescription,
	CardHeader,
	CardTitle,
} from "@/components/ui/card";
import {
	Field,
	FieldDescription,
	FieldGroup,
	FieldLabel,
} from "@/components/ui/field";
import { Input } from "@/components/ui/input";
import Link from "next/link";
import { signUpAction } from "@/app/actions/auth";
import { useActionState } from "react";

type InputErrors = { field: string; fieldError: string }[];

function displayErrors(errors: InputErrors, fieldName: string) {
	return (
		<ul>
			{errors
				.filter((err) => err.field === fieldName)
				.map((err, index) => {
					return (
						<li key={index}>
							<span className="text-red-500 text-sm">{err.fieldError}</span>
						</li>
					);
				})}
		</ul>
	);
}

export function RegisterForm({
	className,
	...props
}: React.ComponentProps<"div">) {
	const [state, formAction, isPending] = useActionState(signUpAction, {
		success: true,
	});

	return (
		<div className={cn("flex flex-col gap-6", className)} {...props}>
			<Card>
				<CardHeader>
					<CardTitle>Create a new account</CardTitle>
					<CardDescription>
						Fill the fields with your information
					</CardDescription>
				</CardHeader>
				<CardContent>
					<form action={formAction}>
						<FieldGroup>
							<Field>
								<FieldLabel htmlFor="name">Name</FieldLabel>
								<Input
									id="name"
									type="name"
									name="name"
									placeholder="Pedro"
									required
								/>
								{state.errors && displayErrors(state.errors, "name")}
							</Field>
							<Field>
								<FieldLabel htmlFor="email">Email</FieldLabel>
								<Input
									id="email"
									type="email"
									name="email"
									placeholder="john@example.com"
									required
								/>
								{state.errors && displayErrors(state.errors, "email")}
							</Field>
							<Field>
								<div className="flex items-center">
									<FieldLabel htmlFor="password">Password</FieldLabel>
									<a
										href="#"
										className="ml-auto inline-block text-sm underline-offset-4 hover:underline"
									>
										Forgot your password?
									</a>
								</div>
								<Input id="password" name="password" type="password" required />
								{state.errors && displayErrors(state.errors, "password")}
							</Field>
							<Field>
								<Button type="submit">Register</Button>
								{state.betterAuthErrors && (
									<ul>
										{state.betterAuthErrors.map((err, index) => {
											return (
												<li key={index} className="text-red-500 text-sm">
													<p>{err}</p>
												</li>
											);
										})}
									</ul>
								)}
								<Button variant="outline" type="button">
									Register with Google
								</Button>
								<FieldDescription className="text-center">
									Don&apos;t have an account?{" "}
									<Link href="/register">Sign up</Link>
								</FieldDescription>
							</Field>
						</FieldGroup>
					</form>
				</CardContent>
			</Card>
		</div>
	);
}
