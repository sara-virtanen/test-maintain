// counter.test.js
// 2026-04-03
// Author: Sara Virtanen
// Unit tests for the counter module (controller)

const { expect } = require("chai");
const counter = require("../src/counter");

describe("Counter (Unit Tests)", () => {
  // Reset the counter before each test to ensure a clean state

  beforeEach(() => {
    counter.reset();
  });

  describe("read()", () => {
    it("should return 0 when the counter has not been modified", () => {
      expect(counter.read()).to.equal(0);
    });

    it("should return the current count after increases", () => {
      counter.increase();
      counter.increase();
      expect(counter.read()).to.equal(2);
    });
  });

  describe("increase()", () => {
    it("should increase the counter by 1 and return the new value", () => {
      const value = counter.increase();
      expect(value).to.equal(1);
    });

    it("should increase the counter correctly when called multiple times", () => {
      counter.increase();
      counter.increase();
      const value = counter.increase();
      expect(value).to.equal(3);
    });
  });

  describe("reset()", () => {
    it("should reset the counter to 0 and return 0", () => {
      counter.increase();
      counter.increase();
      const value = counter.reset();
      expect(value).to.equal(0);
    });

    it("should allow increasing after a reset", () => {
      counter.increase();
      counter.reset();
      const value = counter.increase();
      expect(value).to.equal(1);
    });
  });
});
