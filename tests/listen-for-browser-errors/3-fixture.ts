import { test as base, expect } from "@playwright/test";

export const test = base.extend({
  page: async ({ page }, use) => {
    const errors: string[] = [];
    page.on("console", (data) => {
      if (data.type() === "error") {
        errors.push(`Error message: ${data.text()}`);
      }
    });

    await use(page);

    expect(
      errors,
      `There were console errors:\n${errors.join("\n")}`
    ).toHaveLength(0);
  },
});
