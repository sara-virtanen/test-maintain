// routes.js
// 2026-02-01
// Author: Sara Virtanen

/**
 * @module src/routes
 * @description Defines the REST API routes for the application, including hex-to-RGB conversion.
 */

const express = require("express");
const hexToRgb = require("./hexToRgb");

const router = express.Router();

/**
 * GET /hex-to-rgb/:hex
 *
 * Converts a hex color string (e.g. "FF00AA") to an RGB object and returns it as JSON.
 *
 * @name GET /hex-to-rgb/:hex
 * @function
 * @param {object} req - Express request object containing the hex parameter.
 * @param {object} res - Express response object used to return JSON output.
 * @returns {void}
 */
router.get("/hex-to-rgb/:hex", (req, res) => {
  try {
    const rgb = hexToRgb(req.params.hex);
    res.json(rgb);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
});

module.exports = router;
