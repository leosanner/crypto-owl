import { createAuthClient } from "better-auth/react";

export const authClient = createAuthClient({
	baseURL: getBaseUrl(),
});

// solve for preview
function getBaseUrl() {
	if (process.env.NODE_ENV === "development") {
		return "http://localhost:3000";
	}

	return process.env.BASE_URL;
}
