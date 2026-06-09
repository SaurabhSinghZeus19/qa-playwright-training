# QA Playwright Training Assignment 

# Project Overview
This project contains UI automation test cases developed using Playwright with TypeScript for the SauceDemo application.
The objective of this assignment is to learn playwright automation, typescript fundamentals, locator strategies, assertions, test data management, debugging and framework organization.

Application Under Test: https://www.saucedemo.com/

# TECHNOLOGIES USED
1) Playwright
2) Typescript
3) Node.js
4) Git & Github

# PROJECT STRUCTURE

QA-PLAYWRIGHT-TRAINING/
|
|----- pages/
|       |----- LoginPage.ts
|       |----- ProductPage.ts
|       |----- CartPage.ts
|       |----- CheckoutPage.ts
|
|
|----- test-data/
|        |----- users.ts
|        |----- products.ts
|
|
|----- tests/
|       |----- login.spec.ts
|       |----- products.spec.ts
|       |----- cart.spec.ts
|       |----- checkout.spec.ts
|
|----- utils/
|      |----- testHelpers.ts
|
|----- Daily-Progress-Log.md
|----- debugging-note.md
|----- manual_test_scenarios.xlsx
|----- debugging-note.md
|----- playwright.config.ts
|----- package.json
|----- README.md
|----- self-review.md


# SETUP INSTRUCTIONS

1) Clone Repository
   git clone<repository-url>

2) Install Dependencies
   npm install

3) Install Playwright Browsers
   npx playwright install      

# Test Execution
1) Run all tests:
   npx playwright test

2) Run a specific test file:
   npx playwright test tests/login.spec.ts

3) Run tests in headed mode:
   npx playwright test --headed

4) Run Tests by Tag
   npx playwright test --grep @smoke
   npx playwright test --grep @negative   

# VIEW TEST REPORT
Generate and open the playwright HTML report:
npx playwright show-report

# Test Data Management
Test data is maintained seperately from test scripts using Typescript files
user.ts 
contains: 1) User credentials 2) User types 3) Checkout information

product.ts
contains: 1) Product names and price used in test scenarios

this is to reduce use of hardcoded values and improve maintainability

# CURRENT TEST COVERAGE

LOGIN:-    ![alt text](LoginAutomation.png)
1) Login page load validation
2) Valid login
3) Invalid password validation
4) Locked user validation

PRODUCTS:- ![alt text](ProductAutomation.png) 
1) Product list visibility
2) Product details page navigation

CART:-     ![alt text](CartAutomation.png)
1) Add product to cart
2) Remove product from cart
3) Add multiple products
4) Cart validation

CHECKOUT:- ![alt text](CheckoutAutomation.png) | ![alt text](CheckoutAutomation2.png)
1) Valid checkout
2) Missing first name validation
3) Missing last name validation
4) Missing postal code validation
5) Empty form validation
6) Successful order completion









