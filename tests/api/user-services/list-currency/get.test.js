test("", async () => {
	const response = await fetch(
		"http://localhost:3000/api/user-services/crypto/list-currency",
		{
			headers: {
				Authorization: `Bearer ${process.env.CRON_SECRET}`,
			},
		}
	);

	const data = await response.json();

	expect(data.body.results.length > 0).toBe(true);
	expect(response.status).toBe(200);
});
