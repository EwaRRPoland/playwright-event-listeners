import { test, expect } from "@playwright/test";

test("view restaurant details", async ({ page }) => {
  // Arrange:
  page.on("console", (data) => {
    if (data.type() === "error") {
      console.error(`❌ Error message: ${data.text()}`);
    }
  });

  const restaurantCard = page.getByTestId("restaurant-card-1");
  const popupContent = page.locator("#popupContent");

  await page.goto("/practice/restaurant-order.html");

  // Act:
  await restaurantCard.click();

  // Assert:
  // Simple check that the order was added to the list
  await expect(popupContent).toContainText("📊 Restaurant Statistics");
  // In real tests, you would check more specific details of the order!
});
