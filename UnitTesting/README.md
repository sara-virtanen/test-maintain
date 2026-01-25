# Exercise 2 – Unit Testing

**Author:** Sara Virtanen  
**Course:** AT00BY10-3012 Ohjelmistojen ylläpito ja testaus

## Tasks

* Write a JavaScript module called mylib containing the basic arithmetic operations
  * Handle division by 0 by throwing an error for 0 as divisor
* Write a main program
  * Import the mylib module in the main program
  * Use the mylib module in the main program to confirm that it works
  * Unit tests should be independent of the main program
* Make a test directory and write Mocha + Chai files in it
  * Create unit tests for mylib module
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

## main.js

## mylib.assert.test.js

-----------------------------------------------------------------------------

Last updated: 2026-01-25
