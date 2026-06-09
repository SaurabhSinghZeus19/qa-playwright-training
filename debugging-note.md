
# DEBUGGING NOTE 

# Failed Test: 
Cart and Checkout test cases after Page Object Model refactoring

# Reason for Failure: 
Several cart and checkout test cases were failing with timeout errors(Error: locator.click: Test timeout of 30000ms exceeded). the tests were unable to locate the Add to cart and Remove buttons for products.

# How I Investigated: 
I reviewed the Playwright error logs and checked the locator generation logic inside the ProductsPage class. After comparing the generated locator value with the actual data-test attribute on the page, i found that only the first space in the product name was being replaced with hyphen(-).
# for example: 
add-to-cart-sauce-labs-backpackak , Generated: add-to-cart-sauce-labs backpack. Because of this mismatch, Playwright could not find the element and eventually timed out.

# Tool Used: 
1) Playwright HTML Report    
2) Playwright error logs

# Fix Applied: 
Updated the locator generation logic to replace all spaces in the product name before creating the dynamic locator.

# Learning: 
When creating dynamic locators, string manipulation should be validated carefully. Even a small formatting issue can cause multiple automated tests to fail. i also learned the importance of reviewing generated locator values while debugging Page Object Model implementations