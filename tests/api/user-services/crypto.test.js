test("Send invalid credentials to api endpoint | Returning 401", async () => {
	const response = await fetch(
		"http://localhost:3000/api/user-services/crypto",
		{
			method: "GET",
			headers: {
				"Content-Type": "application/json",
				Authorization: `Bearer ${process.env.CRON_SECRET}sddfe`,
			},
		}
	);

	expect(response.status).toBe(401);
});

test("Send empty credentials to api endpoint | Returning 401", async () => {
	const response = await fetch(
		"http://localhost:3000/api/user-services/crypto",
		{
			method: "GET",
			headers: {
				"Content-Type": "application/json",
				Authorization: `Bearer undefined`,
			},
		}
	);

	expect(response.status).toBe(401);
});

test("Send valid credentials | Returning 200", async () => {
	const response = await fetch(
		"http://localhost:3000/api/user-services/crypto",
		{
			method: "GET",
			headers: {
				"Content-Type": "application/json",
				Authorization: `Bearer ${process.env.CRON_SECRET}`,
			},
		}
	);

	expect(response.status).toBe(200);
});
