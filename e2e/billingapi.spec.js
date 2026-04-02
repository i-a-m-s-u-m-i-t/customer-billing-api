const { test, expect } = require("@playwright/test");

test("Get All Billing", async ({ request }) => {
  const response = await request.get("http://localhost:5000/api/billing/all");

  expect(response.status()).toBe(200);

  const data = await response.json();

  console.log(data);
});
