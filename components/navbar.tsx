import { ChevronDown, Ghost, HandCoins } from "lucide-react"; // Ícones ilustrativos
import SidebarUser from "./sidebar-user";
import { getSession } from "@/lib/auth-session";
import { Button } from "./ui/button";
import Link from "next/link";

function LogInSingUp() {
	return (
		<div>
			<Button variant={"ghost"}>
				<Link href="/login">Login</Link>
			</Button>
			<Button variant={"outline"}>
				<Link href="/register">Register</Link>
			</Button>
		</div>
	);
}

export default async function Navbar() {
	const session = await getSession();
	const user = session?.user;

	return (
		<nav className="flex items-center justify-between px-12 py-4 bg-white shadow-md relative">
			{/* LADO ESQUERDO: Logo e Menu Dropdown */}
			<div className="flex items-center gap-8">
				<div className="font-bold">
					<HandCoins size={25} />
				</div>

				{/* Opção com Hover */}
				<div className="relative group py-2">
					<button className="flex items-center gap-1 font-medium hover:text-blue-500 transition">
						Serviços <ChevronDown size={16} />
					</button>

					{/* Submenu que aparece no Hover */}
					<div className="absolute left-0 mt-0 w-48 bg-white border border-gray-100 rounded-md shadow-lg opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 z-50">
						<a href="#" className="block px-4 py-2 hover:bg-gray-50">
							Consultoria
						</a>
						<a href="#" className="block px-4 py-2 hover:bg-gray-50">
							Desenvolvimento
						</a>
						<a href="#" className="block px-4 py-2 hover:bg-gray-50">
							Design
						</a>
					</div>
				</div>
			</div>

			{user ? <SidebarUser userInfo={{ name: user.name }} /> : <LogInSingUp />}
		</nav>
	);
}
