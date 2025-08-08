import { test as base, expect } from "@playwright/test";

export const test = base.extend({
  page: async ({ page }, use) => {
    const errors: string[] = [];
    page.on("response", (data) => {
      if (data.status() === 500) {
        errors.push(`Error response: ${data.status()} for ${data.url()}`);
      }
    });

    await use(page);

    expect(
      errors,
      `There were response errors:\n${errors.join("\n")}`
    ).toHaveLength(0);
  },
});
