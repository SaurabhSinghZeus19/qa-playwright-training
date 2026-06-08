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
|----- tests/
|       |----- login.spec.ts
|       |----- products.spec.ts
|       |----- cart.spec.ts
|       |----- checkout.spec.ts
|
|
|----- test-data/
|        |----- users.ts
|        |----- products.ts
|
|
|----- manual_test_scenarios.xlsx
|----- debugging-note.md
|----- playwright.config.ts
|----- package.json
|----- README.md

# DAILY PROGRESS LOG

DAY 1:
1) Explored saucedemo application manually.
2) Identified and documented manual test scenarios
3) set up playwright project using typescript
4) created typed user test data using typescript interfaces and types
5) Automated login-related test cases
6) Generated and reviewed playwright HTML report

Day 2:
1) Created typed product test data
2) Automated product listing, cart, checkout, and order completion scenarios
3) Added negative validation test cases
4) Used stable locators and meaningful assertion
5) Investigated and fixed automation issues using playwright report

Day 3:
to be completed

# INSTALLATION

1) Install project dependencies:
   npm install
2) Install Playwright browsers:
   npx playwright install

# RUNNING TESTS
1) Run all tests:
   npx playwright test
2) Run a specific test file:
   npx playwright test tests/login.spec.ts
3) Run tests in headed mode:
   npx playwright test --headed

# VIEW TEST REPORT
Generate and open the playwright HTML report:
npx playwright show-report

# CURRENT TEST COVERAGE
1) Login Validation
2) Product Listing
3) Product Details
4) Add to cart
5) Remove from cart
6) Cart Validation
7) Order Completion
8) Negative Validation Scenarios