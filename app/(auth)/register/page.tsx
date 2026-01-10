import { signUpAction } from "@/app/actions/auth";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";

export default function SignUpPage() {
	return (
		<div className="flex flex-col items-center justify-center h-screen gap-4">
			<h1 className="text-2xl font-bold">Sign Up</h1>

			<form action={signUpAction} className="flex flex-col gap-4 w-64">
				<div className="flex flex-col gap-1">
					<Label htmlFor="name">Name</Label>
					<Input
						id="name"
						type="text"
						name="name"
						placeholder="Name"
						required
					/>
				</div>

				<div className="flex flex-col gap-1">
					<Label htmlFor="email">Email</Label>
					<Input
						id="email"
						type="email"
						name="email"
						placeholder="Email"
						required
					/>
				</div>

				<div className="flex flex-col gap-1">
					<Label htmlFor="password">Password</Label>
					<Input
						id="password"
						type="password"
						name="password"
						placeholder="Password"
						required
					/>
				</div>

				<Button type="submit">Sign Up</Button>
			</form>
		</div>
	);
}
