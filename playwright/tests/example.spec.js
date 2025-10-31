import { test, expect } from "@playwright/test";

test("Open Google and verify title", async ({ page }) => {
  await page.goto("https://www.google.com");
  await expect(page).toHaveTitle(/Google/);
  console.log(`Playwright Sample run succesfull`);
});
