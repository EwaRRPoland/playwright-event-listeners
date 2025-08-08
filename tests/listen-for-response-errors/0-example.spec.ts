import { test, expect } from "@playwright/test";

test("simple order submission", async ({ page }) => {
  // Arrange:
  // generate a random user name
  const userName = `User_${Math.floor(Math.random() * 1000)}`;
  const nameInput = page.getByTestId("customer-name-input");
  const orderItemSelect = page.getByTestId("item-name-input-1");
  const submitButton = page.getByTestId("submit-order-btn");
  const ordersList = page.getByTestId("orders-list");

  await page.goto("/practice/restaurant-order.html");

  // Act:
  await nameInput.fill(userName);
  await orderItemSelect.selectOption("Classic Burger");
  await submitButton.click();

  // Assert:
  // Simple check that the order was added to the list
  await expect(ordersList).toContainText(userName);
  // In real tests, you would check more specific details of the order!
});
