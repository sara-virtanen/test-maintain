# Exercise 2 – Unit Testing

**Author:** Sara Virtanen  
**Course:** AT00BY10-3012 Ohjelmistojen ylläpito ja testaus

## Overview

This project contains a small JavaScript utility library, a main program that uses the library, and unit tests written with Mocha and Chai. The purpose is to demonstrate basic module usage and independent unit testing.

## Tasks

* Write a JavaScript module called `mylib` containing basic arithmetic operations
  * Division by zero must throw an error
* Write a main program
  * Import `mylib.js` in `main.js`
  * Use the exported functions to verify correct operation
  * Unit tests must not depend on `main.js`
* Write unit tests using Mocha and Chai
  * At least one test per function
  * Include one function that executes before testing and one that runs after testing is completed
  * One test must expect an error when dividing by zero
 
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

## Prerequisites

* Node.js installed
* npm available on the command line

## Setting up the environment

Run the following commands in the directory:

`npm init -y`  
`npm install --save-dev mocha chai`

### package.json test script

The `package.json` file must include a test script that runs Mocha:

``` 
{
  "scripts": {
    "test": "mocha"
  }
}
```

## mylib.js

A utility library exporting four basic arithmetic functions:

* add(a, b) - Returns the sum of two numbers
* subtract(a, b) - Returns the difference of two numbers
* multiply(a, b) - Returns the product of two numbers
* divide(a, b) - Returns the quotient of two numbers (throws error if dividing by zero)

Export statement:

`module.exports = {
  add,
  subtract,
  multiply,
  divide,
};`

## main.js

Demonstrates how to import and use the library functions.

Importing the module:

`const { add, subtract, multiply, divide } = require("./mylib");`

Running the main program in the `src/` directory:

`node main.js`

The program executes the imported functions and outputs the results to the console. This file is not used by the unit tests.

## mylib.assert.test.js

Unit tests using Mocha and Chai frameworks.

* Addition, subtraction, multiplication and division work correctly
* Division by zero throws an error

Run tests:

`npm test`

This executes all tests in the `test/` directory using Mocha.

-----------------------------------------------------------------------------

Last updated: 2026-01-25
