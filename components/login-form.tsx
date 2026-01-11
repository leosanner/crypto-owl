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
import { signInAction } from "@/app/actions/auth";
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

export function LoginForm({
	className,
	...props
}: React.ComponentProps<"div">) {
	const [state, formAction, isPending] = useActionState(signInAction, {
		success: true,
		errors: [],
	});

	return (
		<div className={cn("flex flex-col gap-6", className)} {...props}>
			<Card>
				<CardHeader>
					<CardTitle>Enter in your account</CardTitle>
					<CardDescription>
						Provide the asked information to login to your account
					</CardDescription>
				</CardHeader>
				<CardContent>
					<form action={formAction}>
						<FieldGroup>
							<Field>
								<FieldLabel htmlFor="email">Email</FieldLabel>
								<Input
									id="email"
									type="email"
									name="email"
									placeholder="m@example.com"
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
								<Button className="cursor-pointer" type="submit">
									Login
								</Button>
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
									Login with Google
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
