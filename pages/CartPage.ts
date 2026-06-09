import { Page, Locator, expect } from "@playwright/test";

// page object model for cart page
export class CartPage {
    readonly page: Page;
    readonly checkoutButton: Locator;
    readonly continueShoppingButton: Locator;

    constructor(page: Page) {
        this.page = page;
        this.checkoutButton = page.locator('[data-test="checkout"]');
        this.continueShoppingButton = page.locator('[data-test="continue-shopping"]');
    }
    // verify product is present in cart
    async verifyProductInCart(productName: string): Promise<void> {
        await expect(this.page.getByText(productName)).toBeVisible();
    }
    // remove product from cart
    async removeProduct(productName: string): Promise<void> {
        const productId = productName.toLowerCase().replace(' ', '-');
        await this.page.locator(`[data-test="remove-${productId}"]`).click();
    }
    // navigate back to products page
    async continueShopping(): Promise<void> {
        await this.continueShoppingButton.click();
    }
    // proceed to checkout
    async checkout(): Promise<void> {
        await this.checkoutButton.click();
    } 
}