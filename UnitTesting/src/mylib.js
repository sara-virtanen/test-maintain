//* mylib.js
//* Author: Sara Virtanen
//* Date: 2026-01-25
//* Description: Library module containing basic arithmetic operations.

function add(a, b) {
  return a + b;
}

function subtract(a, b) {
  return a - b;
}

function multiply(a, b) {
  return a * b;
}

function divide(a, b) {
  if (b === 0) {
    throw new Error("Division by zero is not allowed.");
  } else {
    return a / b;
  }
}

module.exports = {
  add,
  subtract,
  multiply,
  divide,
};




