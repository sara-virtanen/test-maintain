// unit.test.js
// 2026-02-01
// Author: Sara Virtanen

const { expect } = require("chai");
const hexToRgb = require("../src/hexToRgb");

describe("Unit Tests: hexToRgb function", () => {
  it("converts uppercase hex to RGB correctly", () => {
    const result = hexToRgb("FF5733");
    expect(result).to.deep.equal({ r: 255, g: 87, b: 51 });
  });

  it("converts lowercase hex to RGB correctly", () => {
    const result = hexToRgb("ff5733");
    expect(result).to.deep.equal({ r: 255, g: 87, b: 51 });
  });

  it("converts hex with leading # to RGB correctly", () => {
    const result = hexToRgb("#FF5733");
    expect(result).to.deep.equal({ r: 255, g: 87, b: 51 });
  });

  it("converts black and white correctly", () => {
    expect(hexToRgb("000000")).to.deep.equal({ r: 0, g: 0, b: 0 });
    expect(hexToRgb("FFFFFF")).to.deep.equal({ r: 255, g: 255, b: 255 });
  });

  it("throws an error for invalid hex characters", () => {
    expect(() => hexToRgb("ZZZZZZ")).to.throw("Invalid hex code");
    expect(() => hexToRgb("12G45Z")).to.throw("Invalid hex code");
  });

  it("throws an error for invalid hex length", () => {
    expect(() => hexToRgb("FFF")).to.throw("Invalid hex code");
    expect(() => hexToRgb("FFFFF")).to.throw("Invalid hex code");
    expect(() => hexToRgb("FFFFFFF")).to.throw("Invalid hex code");
  });

  it("throws an error for non-string input", () => {
    expect(() => hexToRgb(123456)).to.throw("Hex value must be a string");
    expect(() => hexToRgb(null)).to.throw("Hex value must be a string");
    expect(() => hexToRgb(undefined)).to.throw("Hex value must be a string");
  });
});
