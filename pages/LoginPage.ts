import { Page, Locator, expect } from '@playwright/test'; 
 
// page object for login page
export class LoginPage { 
  readonly page: Page; 
  readonly usernameInput: Locator; 
  readonly passwordInput: Locator; 
  readonly loginButton: Locator; 
  readonly errorMessage: Locator; 
 
  
  constructor(page: Page) { 
    this.page = page; 
    this.usernameInput = page.locator('[data-test="username"]'); 
    this.passwordInput = page.locator('[data-test="password"]'); 
    this.loginButton = page.locator('[data-test="login-button"]'); 
    this.errorMessage = page.locator('[data-test="error"]'); 
  } 
  // method to navigate to login page
  async goto(): Promise<void> { 
    await this.page.goto('https://www.saucedemo.com/'); 
  } 
  // method to perform login action
  async login(username: string, password: string): Promise<void> { 
    await this.usernameInput.fill(username); 
    await this.passwordInput.fill(password); 
    await this.loginButton.click(); 
  } 
  // method to verify that login page is visible
  async verifyLoginPageIsVisible(): Promise<void> { 
    await expect(this.usernameInput).toBeVisible(); 
    await expect(this.passwordInput).toBeVisible(); 
    await expect(this.loginButton).toBeVisible(); 
  } 
  // method to verify error message
  async verifyErrorMessage(expectedMessage: string): Promise<void> { 
    await expect(this.errorMessage).toContainText(expectedMessage); 
  } 
} 