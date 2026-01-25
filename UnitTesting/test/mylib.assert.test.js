//* mylib.assert.test.js
//* Author: Sara Virtanen
//* Date: 2026-01-25
//* Description: Unit tests for mylib arithmetic operations using Mocha and Chai using assert style.

const { expect } = require("chai");
const { add, subtract, multiply, divide } = require("../src/mylib.js");

describe("mylib Arithmetic Operations", function () {
  before(function () {
    // Runs once before the first test in this block
    console.log("Starting mylib Arithmetic Operations Tests...");
  });

  after(function () {
    // Runs once after the last test in this block
    console.log("Completed mylib Arithmetic Operations Tests.");
  });

  describe("add()", function () {
    it("should return the sum of two numbers", function () {
      expect(add(3, 5)).to.equal(8);
      expect(add(-2, 2)).to.equal(0);
    });
  });

  describe("subtract()", function () {
    it("should return the difference of two numbers", function () {
      expect(subtract(10, 4)).to.equal(6);
      expect(subtract(0, 5)).to.equal(-5);
    });
  });

  describe("multiply()", function () {
    it("should return the product of two numbers", function () {
      expect(multiply(6, 7)).to.equal(42);
      expect(multiply(-3, 3)).to.equal(-9);
    });
  });

  describe("divide()", function () {
    it("should return the quotient of two numbers", function () {
      expect(divide(20, 4)).to.equal(5);
      expect(divide(-15, 3)).to.equal(-5);
    });

    it("should throw an error when dividing by zero", function () {
      expect(() => divide(10, 0)).to.throw("Division by zero is not allowed.");
    });
  });
});
