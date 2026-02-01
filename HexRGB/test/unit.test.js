// unit.test.js
// 2026-02-01
// Author: Sara Virtanen
// Unit tests for hexToRgb function.

/**
 * @module test/unit
 * @description
 * Unit tests for the hexToRgb function using Chai.
 */

const { expect } = require('chai');
const hexToRgb = require('../src/hexToRgb');

describe('Unit Tests: hexToRgb function', () => {
    /**
     * Tests that a valid uppercase hex string is converted correctly.
     */
    it('converts uppercase hex to RGB correctly', () => {
        const result = hexToRgb('FF5733');
        expect(result).to.deep.equal({ r: 255, g: 87, b: 51 });
    });

    /**
     * Tests that a valid lowercase hex string is converted correctly.
     */
    it('converts lowercase hex to RGB correctly', () => {
        const result = hexToRgb('ff5733');
        expect(result).to.deep.equal({ r: 255, g: 87, b: 51 });
    });

    /**
     * Tests that a hex string with a leading # is converted correctly.
     */
    it('converts hex with leading # to RGB correctly', () => {
        const result = hexToRgb('#FF5733');
        expect(result).to.deep.equal({ r: 255, g: 87, b: 51 });
    });

    /**
     * Tests boundary values: black and white.
     */
    it('converts black and white correctly', () => {
        expect(hexToRgb('000000')).to.deep.equal({ r: 0, g: 0, b: 0 });
        expect(hexToRgb('FFFFFF')).to.deep.equal({ r: 255, g: 255, b: 255 });
    });

    /**
     * Tests that invalid hex strings throw an error.
     */
    it('throws an error for invalid hex characters', () => {
        expect(() => hexToRgb('ZZZZZZ')).to.throw('Invalid hex code');
        expect(() => hexToRgb('12G45Z')).to.throw('Invalid hex code');
    });

    /**
     * Tests that hex strings with invalid length throw an error.
     */
    it('throws an error for invalid hex length', () => {
        expect(() => hexToRgb('FFF')).to.throw('Invalid hex code');
        expect(() => hexToRgb('FFFFF')).to.throw('Invalid hex code');
        expect(() => hexToRgb('FFFFFFF')).to.throw('Invalid hex code');
    });

    /**
     * Tests that non-string inputs throw an error.
     */
    it('throws an error for non-string input', () => {
        expect(() => hexToRgb(123456)).to.throw('Hex value must be a string');
        expect(() => hexToRgb(null)).to.throw('Hex value must be a string');
        expect(() => hexToRgb(undefined)).to.throw('Hex value must be a string');
    });
});
