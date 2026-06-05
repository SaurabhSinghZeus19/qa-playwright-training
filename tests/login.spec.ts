 // import playwright test utilities
import { test, expect } from "@playwright/test";
import { users } from "../test-data/users";

test.beforeEach(async ({ page }) => {
    await
    page.goto('https://www.saucedemo.com/');   // navigate to saucedemo before each test
});

test('TC_001 Login page should load' ,     // verify login page elements are visible
    async ({page}) => {
        await
        expect(page.locator('[data-test="username"]')).toBeVisible();
        await
        expect(page.locator('[data-test="password"]')).toBeVisible();
        await
        expect(page.locator('[data-test="login-button"]')).toBeVisible();
    });

test('TC_002 Valid user should login' ,   // verify valid user can login successfully
    async ({page}) => {
        await
        page.locator('[data-test="username"]').fill(users[0].username);
        await
        page.locator('[data-test="password"]').fill(users[0].password);
        await
        page.locator('[data-test="login-button"]').click();
        await expect(page).toHaveURL(/inventory/);
    });

test('TC_003 Invalid password should show error' ,  // verify error message is shown for invalid password
    async ({page}) => {
        await
        page.locator('[data-test="username"]').fill('standard_user');
        await
        page.locator('[data-test="password"]').fill('wrong_password');
        await
        page.locator('[data-test="login-button"]').click();
        await
        expect(page.locator('[data-test="error"]')).toBeVisible();
    });

test('TC_004 Locked user should not login' , // verify locked out user cannot login and sees appropriate error message
    async ({page}) => {
        await
        page.locator('[data-test="username"]').fill('locked_out_user');
        await
        page.locator('[data-test="password"]').fill('secret_sauce');
        await
        page.locator('[data-test="login-button"]').click();
        await
        expect(page.locator('[data-test="error"]')).toContainText('locked out');
    });

