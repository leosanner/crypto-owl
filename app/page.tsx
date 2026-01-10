import { signOutAction } from "./actions/auth";
import { getSession } from "@/lib/auth-session";

export default async function Home() {
	const session = await getSession();

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
