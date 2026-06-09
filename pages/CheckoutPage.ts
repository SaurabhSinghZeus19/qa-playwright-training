import { Page, Locator, expect } from "@playwright/test";

// page object for checkout page
export class CheckoutPage {
    readonly page: Page;
    readonly firstNameInput: Locator;
    readonly lastNameInput: Locator;
    readonly postalCodeInput: Locator;
    readonly continueButton: Locator;
    readonly finishButton: Locator;
    readonly errorMessage: Locator;

    constructor(page: Page) {
        this.page = page;
        this.firstNameInput = page.locator('[data-test="firstName"]');
        this.lastNameInput = page.locator('[data-test="lastName"]');
        this.postalCodeInput = page.locator('[data-test="postalCode"]');
        this.continueButton = page.locator('[data-test="continue"]');
        this.finishButton = page.locator('[data-test="finish"]');
        this.errorMessage = page.locator('[data-test="error"]');
    }
    // fill checkout details
    async fillCheckoutDetails(firstName: string, lastName: string, postalCode: string): Promise<void> {
        await this.firstNameInput.fill(firstName);
        await this.lastNameInput.fill(lastName);
        await this.postalCodeInput.fill(postalCode);
    }
    // continue to checkout overview page
    async continueCheckout(): Promise<void> {
        await this.continueButton.click();
    }
    // verify checkout validation error message
    async verifyValidationError(expectedMessage: string): Promise<void> {
        await expect(this.errorMessage).toContainText(expectedMessage);
    }
    // finish the order
    async finishOrder(): Promise<void> {
        await this.finishButton.click();
    }// verify order confirmation
    async verifyOrderConfirmation(): Promise<void> {
        await expect(this.page.getByText("Thank you for your order!")).toBeVisible();
    }
}
