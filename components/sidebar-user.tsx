"use client";
import { User } from "lucide-react";
import { useState } from "react";
import SignOutButton from "./signout-button";

type SidebarUserProps = {
	userInfo: {
		name: string;
	};
};

export default function SidebarUser({ userInfo }: SidebarUserProps) {
	const [isSidebarOpen, setIsSidebarOpen] = useState(false);

	return (
		<>
			<div
				className="cursor-pointer p-2 hover:bg-gray-100 rounded-full transition"
				onClick={() => setIsSidebarOpen(true)}
			>
				<p>
					Olá, <span className="text-accent-foreground">{userInfo.name}</span>!
				</p>
			</div>
			<div
				className={`fixed inset-y-0 right-0 w-64 bg-white shadow-2xl transform ${
					isSidebarOpen ? "translate-x-0" : "translate-x-full"
				} transition-transform duration-300 ease-in-out z-[100]`}
			>
				<div className="p-5">
					<button
						onClick={() => setIsSidebarOpen(false)}
						className="mb-8 text-gray-500 font-bold cursor-pointer"
					>
						X Fechar
					</button>
					<h2 className="text-xl font-bold mb-4">Perfil do Usuário</h2>
					<ul className="space-y-4">
						<li className="hover:text-blue-600 cursor-pointer">Meus Dados</li>
						<li className="hover:text-blue-600 cursor-pointer">
							Configurações
						</li>
						<li className="text-red-500 cursor-pointer border-t pt-4">
							<SignOutButton />
						</li>
					</ul>
				</div>
			</div>

			{/* Backdrop (Escurece o fundo ao abrir a sidebar) */}
			{isSidebarOpen && (
				<div
					className="fixed inset-0 bg-black bg-opacity-30 z-[90]"
					onClick={() => setIsSidebarOpen(false)}
				/>
			)}
		</>
	);
}
