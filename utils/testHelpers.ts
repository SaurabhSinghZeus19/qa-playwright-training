// reusable helper for standard user login
import { Page } from "@playwright/test";
import { LoginPage } from "../pages/LoginPage";
import { users } from "../test-data/users";

export async function loginAsStandardUser(page: Page): Promise<void> {
    const loginPage = new LoginPage(page);
    await loginPage.goto();
    await loginPage.login(users[0].username, users[0].password);
}