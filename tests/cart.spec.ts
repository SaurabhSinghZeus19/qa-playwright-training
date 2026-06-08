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

test('TC_006 Add one product to cart',  // verify that adding a product to the cart updates the cart badge count.
    async ({page}) => {
        await page.locator('[data-test="add-to-cart-sauce-labs-backpack"]').click();
        await expect(page.locator('[data-test="shopping-cart-badge"]')).toHaveText('1');
    });

test('TC_007 Remove product from cart', // verify that removing a product from the cart updates the cart badge count and removes the product from the cart.
    async ({page}) => {
        await page.locator('[data-test="add-to-cart-sauce-labs-backpack"]').click();
        await page.locator('[data-test="remove-sauce-labs-backpack"]').click();
        await expect(page.locator('[data-test="shopping-cart-badge"]')).toBeHidden();
    });

test('TC_008 Add multiple products to cart',  // verify that adding multiple products to the cart updates the cart badge count.
    async ({page}) => {
        await page.locator('[data-test="add-to-cart-sauce-labs-backpack"]').click();
        await page.locator('[data-test="add-to-cart-sauce-labs-bike-light"]').click();
        await expect(page.locator('[data-test="shopping-cart-badge"]')).toHaveText('2');
    });

test('TC_009 Cart should show selected products', // verify that the cart page shows the products that were added to the cart.
    async ({page}) => {
        await page.locator('[data-test="add-to-cart-sauce-labs-backpack"]').click();
        await page.locator('[data-test="shopping-cart-link"]').click();
        await expect(page).toHaveURL(/cart/);
        await expect(page.getByText(products[0].name)).toBeVisible();
    });

