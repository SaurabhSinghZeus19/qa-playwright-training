# DEBUGGING NOTE

# Failed Test : Login validation tests(TC_003 and TC_004)

# Reason for Failure: The tests were failing even though the logic looked correct. the error message was showing "Username is required" instead of the expected validation message.

# How I Investigated: First, i checked the Playwright HTML report and read the failure logs carefully. after reviewing the test code line by line, i noticed that some playwright actions were missing "await" keyword. because of this the fields were not being filled properly before the next step was executed.

# Tool Used: 1) Playwright HTML Report    2) Test failure logs

# Fix Applied: Added the missing await statements before fill() and click() actions and executed the tests again.

# Learning: This issue helped me understand the importance of "async/await" in playwright. even a small missing "await" can cause unexpected test failures and incorrect application behavior. i also learned how useful the Playwright HTML report is for debugging failed test cases