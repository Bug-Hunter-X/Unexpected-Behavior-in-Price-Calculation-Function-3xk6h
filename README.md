# Unexpected Behavior in Price Calculation Function
This repository demonstrates a common error in decentralized applications (DApps): improper handling of edge cases in calculations.  The function `calculateTotal` calculates the total price of items in an array. However, it fails to handle edge cases such as empty arrays and non-numeric prices. This can lead to unexpected results or runtime errors.

The `bug.js` file contains the buggy code, and `bugSolution.js` contains a corrected version that addresses these issues.

This example highlights the importance of robust input validation and error handling in DApps to prevent unexpected behavior and ensure reliability.