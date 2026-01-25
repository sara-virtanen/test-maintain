# Exercise 2 – Unit Testing

**Author:** Sara Virtanen  
**Course:** AT00BY10-3012 Ohjelmistojen ylläpito ja testaus

## Tasks

* Write a JavaScript module called `mylib` containing the basic arithmetic operations
  * Handle division by 0 by throwing an error for 0 as divisor
* Write a main program
  * Import the `mylib.js` module in `main.js`
  * Use `mylib.js` in `main.js` to confirm that it works
  * Unit tests should be independent of `main.js`
* Make a test directory and write Mocha + Chai files in it
  * Create unit tests for `mylib.js`
  * Include at least one test per function
  * Include one function that executes before testing and one that runs after testing is completed
  * Create a unit test which expects an error with 0 as divisor
 
## Project folder structure

```
test-maintain/
    ├── UnitTesting/
    │   ├── src/
    │   │   ├── main.js
    │   │   ├── mylib.js
    │   ├── test/
    │   │   └── mylib.assert.test.js
    │   ├── package-lock.json
    │   └── package.json
    └── .gitignore
```

## Setting up the environment

`npm init -y`  
`npm install --save-dev mocha chai`

## mylib.js

A utility library exporting four basic arithmetic functions:

* add - Returns the sum of two numbers
* subtract - Returns the difference of two numbers
* multiply - Returns the product of two numbers
* divide - Returns the quotient of two numbers (throws error if dividing by zero)

`module.exports = {
  add,
  subtract,
  multiply,
  divide,
};
`

## main.js

Demonstrates how to import and use the library functions.

`const { add, subtract, multiply, divide } = require("./src/mylib");`

## mylib.assert.test.js

Unit tests using Mocha and Chai frameworks. Tests verify:

* Addition, subtraction, multiplication work correctly
* Division works with positive and negative numbers
* Division by zero throws an error

Run tests:
`npm test`

This executes all tests in the test/ directory using Mocha.

-----------------------------------------------------------------------------

Last updated: 2026-01-25
