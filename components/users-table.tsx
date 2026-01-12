"use client";

type User = {
	id: string;
	name: string | null;
	email: string;
	role: string;
	createdAt: string | Date;
	updatedAt: string | Date;
};

function formatDate(value: string | Date) {
	const d = typeof value === "string" ? new Date(value) : value;
	if (Number.isNaN(d.getTime())) return "-";
	return d.toLocaleString("pt-BR", {
		dateStyle: "short",
		timeStyle: "short",
	});
}

export default function UsersTable({
	users,
	title = "Users",
}: {
	users: User[];
	title?: string;
}) {
	return (
		<section className="w-full">
			<div className="mb-3 flex items-center justify-between gap-3">
				<h2 className="text-lg font-semibold">{title}</h2>
				<span className="text-sm text-muted-foreground">
					{users.length} {users.length === 1 ? "user" : "users"}
				</span>
			</div>

			<div className="overflow-hidden rounded-xl border bg-background">
				<div className="overflow-x-auto">
					<table className="w-full text-sm">
						<thead className="bg-muted/50">
							<tr className="text-left">
								<th className="px-4 py-3 font-medium">Name</th>
								<th className="px-4 py-3 font-medium">Email</th>
								<th className="px-4 py-3 font-medium">Role</th>
								<th className="px-4 py-3 font-medium">Created</th>
								<th className="px-4 py-3 font-medium">Updated</th>
							</tr>
						</thead>

						<tbody>
							{users.length === 0 ? (
								<tr>
									<td
										colSpan={5}
										className="px-4 py-10 text-center text-muted-foreground"
									>
										No users found.
									</td>
								</tr>
							) : (
								users.map((u) => (
									<tr key={u.id} className="border-t">
										<td className="px-4 py-3">
											<div className="font-medium">{u.name ?? "-"}</div>
											<div className="text-xs text-muted-foreground">
												{u.id}
											</div>
										</td>

										<td className="px-4 py-3">{u.email}</td>

										<td className="px-4 py-3">
											<span className="inline-flex items-center rounded-full border px-2 py-0.5 text-xs">
												{u.role}
											</span>
										</td>

										<td className="px-4 py-3 text-muted-foreground">
											{formatDate(u.createdAt)}
										</td>

										<td className="px-4 py-3 text-muted-foreground">
											{formatDate(u.updatedAt)}
										</td>
									</tr>
								))
							)}
						</tbody>
					</table>
				</div>
			</div>
		</section>
	);
}
