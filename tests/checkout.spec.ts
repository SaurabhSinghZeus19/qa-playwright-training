 // checkout functionality test scenarios
 

import { test, expect } from "@playwright/test";
import { products } from "../test-data/products";
import { users } from "../test-data/users";
import { ProductsPage } from "../pages/ProductsPage";
import {loginAsStandardUser} from "../utils/testHelpers";
import { CheckoutPage } from "../pages/CheckoutPage";
import { CartPage } from "../pages/CartPage";

test.beforeEach(async ({ page }) => {
   /* await
    page.goto('https://www.saucedemo.com/inventory.html');   // navigate to inventory page before each test
    await
    page.locator('[data-test="username"]').fill(users[0].username);
    await
    page.locator('[data-test="password"]').fill(users[0].password);
    await
    page.locator('[data-test="login-button"]').click();*/
    await loginAsStandardUser(page);
});

test('TC_010 Checkout with valid details @checkout',  // verify that checkout process works successfully with valid details.
    async ({page}) => {
       /* await page.locator('[data-test="add-to-cart-sauce-labs-backpack"]').click();
        await page.locator('[data-test="shopping-cart-link"]').click();
        await page.locator('[data-test="checkout"]').click();
        await page.locator('[data-test="firstName"]').fill(users[0].firstName!);
        await page.locator('[data-test="lastName"]').fill(users[0].lastName!);
        await page.locator('[data-test="postalCode"]').fill(users[0].postalCode!);
        await page.locator('[data-test="continue"]').click();*/
        const productsPage = new ProductsPage(page);
        const cartPage = new CartPage(page);
        const checkoutPage = new CheckoutPage(page);

        await productsPage.addProductToCart(products[0].name);
        await productsPage.goToCart();
        await cartPage.checkout();
        await checkoutPage.fillCheckoutDetails(users[0].firstName!, users[0].lastName!, users[0].postalCode!);
        await checkoutPage.continueCheckout();
        await expect(page).toHaveURL(/checkout-step-two/);
        await expect(page.getByText(products[0].name)).toBeVisible();
    });

test('TC_011 Checkout with missing first name @negative @checkout', // verify that appropriate  message is shown when first name is missing.
    async ({page}) => {
       /* await page.locator('[data-test="add-to-cart-sauce-labs-backpack"]').click();
        await page.locator('[data-test="shopping-cart-link"]').click();
        await page.locator('[data-test="checkout"]').click();
        await page.locator('[data-test="lastName"]').fill(users[0].lastName!);
        await page.locator('[data-test="postalCode"]').fill(users[0].postalCode!);
        await page.locator('[data-test="continue"]').click();
        await expect(page.locator('[data-test="error"]')).toContainText('First Name is required');*/
        const productsPage = new ProductsPage(page);
        const cartPage = new CartPage(page);
        const checkoutPage = new CheckoutPage(page);
        await productsPage.addProductToCart(products[0].name);
        await productsPage.goToCart();
        await cartPage.checkout();
        await checkoutPage.fillCheckoutDetails('', users[0].lastName!, users[0].postalCode!);
        await checkoutPage.continueCheckout();
        await expect(page.locator('[data-test="error"]')).toContainText('First Name is required');
    });

test('TC_012 Checkout with missing postal code @negative @checkout',  // verify that appropriate  message is shown when postal code is missing.
    async ({page}) => {
       /* await page.locator('[data-test="add-to-cart-sauce-labs-backpack"]').click();
        await page.locator('[data-test="shopping-cart-link"]').click();
        await page.locator('[data-test="checkout"]').click();
        await page.locator('[data-test="firstName"]').fill(users[0].firstName!);
        await page.locator('[data-test="lastName"]').fill(users[0].lastName!);
        await page.locator('[data-test="continue"]').click();
        await expect(page.locator('[data-test="error"]')).toContainText('Postal Code is required');*/
        const productsPage = new ProductsPage(page);
        const cartPage = new CartPage(page);
        const checkoutPage = new CheckoutPage(page);
        await productsPage.addProductToCart(products[0].name);
        await productsPage.goToCart();
        await cartPage.checkout();
        await checkoutPage.fillCheckoutDetails(users[0].firstName!, users[0].lastName!, '');
        await checkoutPage.continueCheckout();
        await expect(page.locator('[data-test="error"]')).toContainText('Postal Code is required');
    });

test('TC_013 Checkout with missing last name @negative @checkout', // verify that appropriate  message is shown when last name is missing.
    async ({page}) => {
       /* await page.locator('[data-test="add-to-cart-sauce-labs-backpack"]').click();
        await page.locator('[data-test="shopping-cart-link"]').click();
        await page.locator('[data-test="checkout"]').click();
        await page.locator('[data-test="firstName"]').fill(users[0].firstName!);
        await page.locator('[data-test="postalCode"]').fill(users[0].postalCode!);
        await page.locator('[data-test="continue"]').click();
        await expect(page.locator('[data-test="error"]')).toContainText('Last Name is required');*/
        const productsPage = new ProductsPage(page);
        const cartPage = new CartPage(page);
        const checkoutPage = new CheckoutPage(page);
        await productsPage.addProductToCart(products[0].name);
        await productsPage.goToCart();
        await cartPage.checkout();
        await checkoutPage.fillCheckoutDetails(users[0].firstName!, '', users[0].postalCode!);
        await checkoutPage.continueCheckout();
        await expect(page.locator('[data-test="error"]')).toContainText('Last Name is required');
    });

test('TC_014 Checkout with all fields empty @negative @checkout', // verify that appropriate  message is shown when all fields are empty.
    async ({page}) => {
      /*  await page.locator('[data-test="add-to-cart-sauce-labs-backpack"]').click();
        await page.locator('[data-test="shopping-cart-link"]').click();
        await page.locator('[data-test="checkout"]').click();
        await page.locator('[data-test="continue"]').click();
        await expect(page.locator('[data-test="error"]')).toContainText('First Name is required');*/
        const productsPage = new ProductsPage(page);
        const cartPage = new CartPage(page);
        const checkoutPage = new CheckoutPage(page);
        await productsPage.addProductToCart(products[0].name);
        await productsPage.goToCart();
        await cartPage.checkout();
        await checkoutPage.fillCheckoutDetails('', '', '');
        await checkoutPage.continueCheckout();
        await expect(page.locator('[data-test="error"]')).toContainText('First Name is required');
    });

test('TC_016 Complete order successfully @regression @checkout',      // verify that order can be completed successfully with valid details.
    async ({page}) => {
       /* await page.locator('[data-test="add-to-cart-sauce-labs-backpack"]').click();
        await page.locator('[data-test="shopping-cart-link"]').click();
        await page.locator('[data-test="checkout"]').click();
        await page.locator('[data-test="firstName"]').fill(users[0].firstName!);
        await page.locator('[data-test="lastName"]').fill(users[0].lastName!);
        await page.locator('[data-test="postalCode"]').fill(users[0].postalCode!);
        await page.locator('[data-test="continue"]').click();
        await page.locator('[data-test="finish"]').click();
        await expect(page).toHaveURL(/checkout-complete/);
        await expect(page.getByText('Thank you for your order!')).toBeVisible();*/
        const productsPage = new ProductsPage(page);
        const cartPage = new CartPage(page);
        const checkoutPage = new CheckoutPage(page);
        await productsPage.addProductToCart(products[0].name);
        await productsPage.goToCart();
        await cartPage.checkout();
        await checkoutPage.fillCheckoutDetails(users[0].firstName!, users[0].lastName!, users[0].postalCode!);
        await checkoutPage.continueCheckout();
        await checkoutPage.finishOrder();
        await checkoutPage.verifyOrderConfirmation();
    });
