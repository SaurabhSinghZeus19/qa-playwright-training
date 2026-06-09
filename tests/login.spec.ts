 // Login test scenarios
 

import { test, expect } from "@playwright/test";
import { LoginPage } from "../pages/LoginPage";
import { users } from "../test-data/users";

test.beforeEach(async ({ page }) => {
    const loginPage = new LoginPage(page);
    await loginPage.goto();
});

test('TC_001 Login page should load @smoke' ,     // verify login page elements are visible
    async ({page}) => {
        const loginPage = new LoginPage(page);
        await loginPage.verifyLoginPageIsVisible();

        /*  await
        expect(page.locator('[data-test="username"]')).toBeVisible();
        await
        expect(page.locator('[data-test="password"]')).toBeVisible();
        await
        expect(page.locator('[data-test="login-button"]')).toBeVisible();*/
    });

test('TC_002 Valid user should login @smoke' ,   // verify valid user can login successfully
    async ({page}) => {
      /*  await
        page.locator('[data-test="username"]').fill(users[0].username);
        await
        page.locator('[data-test="password"]').fill(users[0].password);
        await
        page.locator('[data-test="login-button"]').click();
        await expect(page).toHaveURL(/inventory/); */
        const loginPage = new LoginPage(page);
        await loginPage.login(users[0].username, users[0].password);
        await expect(page).toHaveURL(/inventory/);
    });

test('TC_003 Invalid password should show error @negative' ,  // verify error message is shown for invalid password
    async ({page}) => {
       /* await
        page.locator('[data-test="username"]').fill('standard_user');
        await
        page.locator('[data-test="password"]').fill('wrong_password');
        await
        page.locator('[data-test="login-button"]').click();
        await
        expect(page.locator('[data-test="error"]')).toBeVisible();*/
        const loginPage = new LoginPage(page);
        await loginPage.login(users[0].username, 'wrong_password');
        await loginPage.verifyErrorMessage('Epic sadface: Username and password do not match any user in this service');
    });

test('TC_004 Locked user should not login @negative' , // verify locked out user cannot login and sees appropriate error message
    async ({page}) => {
       /* await
        page.locator('[data-test="username"]').fill('locked_out_user');
        await
        page.locator('[data-test="password"]').fill('secret_sauce');
        await
        page.locator('[data-test="login-button"]').click();
        await
        expect(page.locator('[data-test="error"]')).toContainText('locked out');*/
        const loginPage = new LoginPage(page);
        await loginPage.login(users[1].username, users[1].password);
        await loginPage.verifyErrorMessage('Epic sadface: Sorry, this user has been locked out.');
    });

