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
 * Converts a hex color string to RGB and returns the result as JSON.
 *
 * @param {import("express").Request} req - Express request object.
 * @param {import("express").Response} res - Express response object.
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
