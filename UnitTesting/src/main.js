//* main.js
//* Author: Sara Virtanen
//* Date: 2026-01-25
//* Description: Export and use basic arithmetic operations from mylib.

const { add, subtract, multiply, divide } = require("./mylib");

// Test values

const a = 8;
const b = 7;

// Addition

const sum = add(a, b);
console.log(`${a} + ${b} = ${sum}`);

// Subtraction

const difference = subtract(a, b);
console.log(`${a} - ${b} = ${difference}`);

// Multiplication

const product = multiply(a, b);
console.log(`${a} * ${b} = ${product}`);

// Division

const quotient = divide(a, b);
console.log(`${a} / ${b} = ${quotient}`);