// hexToRgb.js
// 2026-02-01
// Author: Sara Virtanen

/**
 * @module src/hexToRgb
 * @description Provides a utility function for converting a hex color string to an RGB object.
 */

/**
 * Represents an RGB color.
 * @typedef {Object} RGB
 * @property {number} r - Red component (0–255)
 * @property {number} g - Green component (0–255)
 * @property {number} b - Blue component (0–255)
 */

/**
 * Converts a hex color string to an RGB object.
 *
 * @param {string} hex - A 6-character hex string, with or without '#'.
 * @returns {RGB} An object containing red, green, and blue values.
 * @throws {Error} If the hex string is invalid or not a string.
 */
function hexToRgb(hex) {
  if (typeof hex !== "string") {
    throw new Error("Hex value must be a string");
  }

  const cleaned = hex.replace("#", "");

  if (!/^[0-9A-Fa-f]{6}$/.test(cleaned)) {
    throw new Error("Invalid hex code");
  }

  return {
    r: parseInt(cleaned.substring(0, 2), 16),
    g: parseInt(cleaned.substring(2, 4), 16),
    b: parseInt(cleaned.substring(4, 6), 16),
  };
}

module.exports = hexToRgb;
