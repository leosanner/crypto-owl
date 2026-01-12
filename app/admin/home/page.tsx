import UsersTable from "@/components/users-table";
import { getSession } from "@/lib/auth-session";
import { AdminModel } from "@/models/admin";
import { forbidden, unauthorized } from "next/navigation";

export default async function Home() {
	const session = await getSession();
	const user = session?.user;

	if (!user) {
		unauthorized();
	}

	if (user.role !== "admin") {
		forbidden();
	}

	const adminModel = new AdminModel();
	const users = await adminModel.getAllUsers();

	return (
		<div className="mt-5 max-w-2/3 m-auto">
			<UsersTable users={users} />
		</div>
	);
}
