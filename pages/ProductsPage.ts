import { Page, Locator, expect } from "@playwright/test";

// page object for products page
export class ProductsPage {
    readonly page: Page;
    readonly inventoryItems: Locator;
    readonly cartBadge: Locator;
    readonly cartLink: Locator;

    // constructor to initialize the page and locators
    constructor(page: Page) {
        this.page = page;
        this.inventoryItems = page.locator('[data-test="inventory-item"]');
        this.cartBadge = page.locator('[data-test="shopping-cart-badge"]');
        this.cartLink = page.locator('[data-test="shopping-cart-link"]');
    }

    // method to verify that products page is visible
    async verifyProductsPageIsVisible(): Promise<void> {
        await expect(this.inventoryItems).toHaveCount(6);
    }
    // method to add product to cart based on product name
    async addProductToCart(productName: string): Promise<void> {
        const productId = productName.toLowerCase().replaceAll(' ', '-');
        await this.page.locator(`[data-test="add-to-cart-${productId}"]`).click();
    }
    // method to remove product from cart based on product name
    async removeProductFromCart(productName: string): Promise<void> {
        const productId = productName.toLowerCase().replaceAll(' ', '-');
        await this.page.locator(`[data-test="remove-${productId}"]`).click();
    }
    // method to verify cart count
    async verifyCartCount(expectedCount: number): Promise<void> {
        await expect(this.cartBadge).toHaveText(expectedCount.toString());
    }
    // method to navigate to cart page
    async goToCart(): Promise<void> {
        await this.cartLink.click();
    }
}

