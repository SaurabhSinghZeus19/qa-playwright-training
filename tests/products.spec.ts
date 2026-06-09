 // product page test scenarios
 
 
import { test, expect } from "@playwright/test";
import { products } from "../test-data/products";
import { ProductsPage } from "../pages/ProductsPage";
import { loginAsStandardUser } from "../utils/testHelpers";

test.beforeEach(async ({ page }) => {
   /* await
    page.goto('https://www.saucedemo.com/');// navigate to saucedemo before each test

    await
    page.locator('[data-test="username"]').fill(users[0].username);
    await
    page.locator('[data-test="password"]').fill(users[0].password);
    await
    page.locator('[data-test="login-button"]').click();*/
    await loginAsStandardUser(page);
});
  
test('TC_005 Product list should be visible after after login @smoke',  // verify product list is visible after successful login.
    async ({page}) => {
       // await expect(page.locator('[data-test="inventory-item"]')).toHaveCount(6);
       const productsPage = new ProductsPage(page);
       await productsPage.verifyProductsPageIsVisible();
    
        await expect(page.getByText(products[0].name)).toBeVisible();
    });

test('TC_015 Product details page should open when product name is clicked @regression', // verify clicking on product name opens product details page.
    async ({page}) => {
        await page.getByText(products[0].name).click();
        await expect(page).toHaveURL(/inventory-item/);
        await expect(page.getByText(products[0].name)).toBeVisible();
    });
