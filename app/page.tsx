import { auth } from "@/lib/auth";
import { headers } from "next/headers";
import { signOutAction } from "./actions/auth";

export default async function Home() {
	const session = await auth.api.getSession({
		headers: await headers(),
	});

	console.log(session);

	return (
		<div>
			<h1>Página inicial</h1>
			<div>
				Logado?: <b>{session ? "Sim" : "Não"}</b>
				<div>
					{session && (
						<div>
							<form action={signOutAction}>
								<button className="cursor-pointer" type="submit">
									Sair
								</button>
							</form>
						</div>
					)}
				</div>
			</div>
		</div>
	);
}
