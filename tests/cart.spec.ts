 // cart functionality test scenarios
 
 
import { test, expect } from "@playwright/test";
import { products } from "../test-data/products";
import { ProductsPage } from "../pages/ProductsPage";
import { CartPage } from "../pages/CartPage";
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

test('TC_006 Add one product to cart @cart',  // verify that adding a product to the cart updates the cart badge count.
    async ({page}) => {
       /* await page.locator('[data-test="add-to-cart-sauce-labs-backpack"]').click();
        await expect(page.locator('[data-test="shopping-cart-badge"]')).toHaveText('1');*/
        const productsPage = new ProductsPage(page);
        await productsPage.addProductToCart(products[0].name);
        await productsPage.verifyCartCount(1);
    });

test('TC_007 Remove product from cart @cart', // verify that removing a product from the cart updates the cart badge count and removes the product from the cart.
    async ({page}) => {
       /* await page.locator('[data-test="add-to-cart-sauce-labs-backpack"]').click();
        await page.locator('[data-test="remove-sauce-labs-backpack"]').click();
        await expect(page.locator('[data-test="shopping-cart-badge"]')).toHaveCount(0);*/
        const productsPage = new ProductsPage(page);
        await productsPage.addProductToCart(products[0].name);
        await productsPage.removeProductFromCart(products[0].name);
        await expect(page.locator('[data-test="shopping-cart-badge"]')).toHaveCount(0);
    });

test('TC_008 Add multiple products to cart @cart @regression',  // verify that adding multiple products to the cart updates the cart badge count.
    async ({page}) => {
       /* await page.locator('[data-test="add-to-cart-sauce-labs-backpack"]').click();
        await page.locator('[data-test="add-to-cart-sauce-labs-bike-light"]').click();
        await expect(page.locator('[data-test="shopping-cart-badge"]')).toHaveText('2');*/
        const productsPage = new ProductsPage(page);
        await productsPage.addProductToCart(products[0].name);
        await productsPage.addProductToCart(products[1].name);
        await productsPage.verifyCartCount(2);
    });

test('TC_009 Cart should show selected products @cart', // verify that the cart page shows the products that were added to the cart.
    async ({page}) => {
        const productsPage = new ProductsPage(page);
        const cartPage = new CartPage(page);
        await productsPage.addProductToCart(products[0].name);
        await productsPage.goToCart();
        await expect(page).toHaveURL(/cart/);
        await cartPage.verifyProductInCart(products[0].name);
    });

