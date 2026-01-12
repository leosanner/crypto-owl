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

export class UserModel {
	async getUserById(id: string): Promise<User | null> {
		const queryObject: QueryConfig = {
			name: this.getUserById.name,
			text: 'SELECT * FROM "user" WHERE id = $1',
			values: [id],
		};
		const result = await query(queryObject);

		if (result.rowCount === 0) {
			return null;
		}

		const user = result.rows[0];

		return {
			id: user.id,
			name: user.name,
			email: user.email,
			createdAt: user.createdAt,
			updatedAt: user.updatedAt,
			role: user.role,
		};
	}

	async getUserRole(id: string): Promise<string | null> {
		const user = await this.getUserById(id);

		if (!user) {
			return null;
		}

		return user.role;
	}

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
