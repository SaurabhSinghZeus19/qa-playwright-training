 // import playwright test utilities and product test data and user test data
import { test, expect } from "@playwright/test";
import { products } from "../test-data/products";
import { users } from "../test-data/users";

test.beforeEach(async ({ page }) => {
    await
    page.goto('https://www.saucedemo.com/');// navigate to saucedemo before each test

    await
    page.locator('[data-test="username"]').fill(users[0].username);
    await
    page.locator('[data-test="password"]').fill(users[0].password);
    await
    page.locator('[data-test="login-button"]').click();
});
  
test('TC_005 Product list should be visible after after login',  // verify product list is visible after successful login.
    async ({page}) => {
        await expect(page.locator('[data-test="inventory-item"]')).toHaveCount(6);
        await expect(page.getByText(products[0].name)).toBeVisible();
    });

test('TC_015 Product details page should open when product name is clicked', // verify clicking on product name opens product details page.
    async ({page}) => {
        await page.getByText(products[0].name).click();
        await expect(page).toHaveURL(/inventory-item/);
        await expect(page.getByText(products[0].name)).toBeVisible();
    });
