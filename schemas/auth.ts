import { z, ZodObject } from "zod";

export const registerSchema = z.object({
	name: z.string().min(2).max(50),
	email: z.email(),
	password: z.string().min(8).max(20),
});

export const loginSchema = z.object({
	email: z.email(),
	password: z.string().min(8).max(20),
});

export type ValidadeSchema = {
	success: boolean;
	errors?: {
		field: string;
		fieldError: string;
	}[];
};

export function validadeSchema(
	content: Object,
	schema: ZodObject
): ValidadeSchema {
	const { success, error } = schema.safeParse(content);
	if (success) {
		return {
			success: true,
		};
	}

	const errors = [];

	for (const errorObj of error.issues) {
		const obj = {
			field: errorObj.path[0] as string,
			fieldError: errorObj.message,
		};
		errors.push(obj);
	}

	return { success: false, errors: errors };
}
