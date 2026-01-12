import { query } from "@/infra/database";
import { QueryConfig } from "pg";

type User = {
	id: string;
	name: string;
	email: string;
	createdAt: Date;
	updatedAt: Date;
	role: string;
};

export class AdminModel {
	async getAllUsers(): Promise<User[]> {
		const queryObject: QueryConfig = {
			text: 'SELECT * FROM "user"',
		};
		const result = await query(queryObject);

		if (result.rowCount !== 0) {
			return result.rows.map((row) => {
				return {
					id: row.id,
					name: row.name,
					email: row.email,
					createdAt: row.createdAt,
					updatedAt: row.updatedAt,
					role: row.role,
				};
			});
		}

		return [];
	}
}
