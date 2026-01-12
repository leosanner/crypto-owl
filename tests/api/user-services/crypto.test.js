test("Send invalid credentials to api endpoint | Returning 500", async () => {
	const response = await fetch(
		"http://localhost:3000/api/user-services/crypto",
		{
			method: "POST",
			headers: { "Content-Type": "application/json" },
			body: JSON.stringify({
				userId: "323s",
				secretKey: "fdcmlmdekmkem",
			}),
		}
	);

	const data = await response.json();

	expect(response.status).toBe(401);
	expect(Array.isArray(data.error)).toBe(true);
});

test("Send 1 invalid credential to api endpoint | Returning 401", async () => {
	const response = await fetch(
		"http://localhost:3000/api/user-services/crypto",
		{
			method: "POST",
			headers: { "Content-Type": "application/json" },
			body: JSON.stringify({
				userId: process.env.USER_ID_CRON,
				secretKey: "fdcmlmdekmkem",
			}),
		}
	);

	expect(response.status).toBe(401);
});

test("Send valid credentials | Returning 200", async () => {
	const response = await fetch(
		"http://localhost:3000/api/user-services/crypto",
		{
			method: "POST",
			headers: { "Content-Type": "application/json" },
			body: JSON.stringify({
				userId: process.env.USER_ID_CRON,
				secretKey: process.env.CRON_SECRET,
			}),
		}
	);

	expect(response.status).toBe(200);
});
