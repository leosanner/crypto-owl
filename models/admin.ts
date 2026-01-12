import { query } from "@/infra/database";
import { QueryConfig } from "pg";
import { UserModel } from "./user";

type User = {
	id: string;
	name: string;
	email: string;
	createdAt: Date;
	updatedAt: Date;
	role: string;
};

export class AdminModel {
	userModel: UserModel;

	constructor() {
		this.userModel = new UserModel();
	}

	async getAllUsers(): Promise<User[]> {
		return await this.userModel.getAllUsers();
	}
}
