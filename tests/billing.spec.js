const { test, expect } = require("@playwright/test");

test("Create Billing API", async ({ request }) => {
  const response = await request.post(
    "http://localhost:5000/api/billing/create",
    {
      data: {
        customerName: "Sumit Maurya",
        email: "sumit@gmail.com",
        phone: "9876543210",
        address: "Bangalore",

        products: [
          { productName: "Laptop", quantity: 1, price: 30000 },
          { productName: "Mouse", quantity: 2, price: 800 },
          { productName: "Keyboard", quantity: 1, price: 2500 },
          { productName: "Monitor", quantity: 1, price: 32000 },
          { productName: "Headphone", quantity: 1, price: 6000 },
        ],

        totalAmount: 71300,
        paymentMethod: "UPI",
      },
    },
  );

  expect(response.status()).toBe(201);

  const body = await response.json();

  expect(body.message).toBe("Billing Created Successfully");
});
