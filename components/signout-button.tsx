import { signOutAction } from "@/app/actions/auth";
import { Button } from "./ui/button";

export default function SignOutButton() {
	return (
		<form action={signOutAction}>
			<Button variant={"destructive"}>Sair</Button>
		</form>
	);
}
