// routes.js
// 2026-04-03
// Author: Sara Virtanen
// Description: Defines the Express routes for the counter API, including endpoints to increase, read, and reset the counter. Each endpoint logs its activity using the logger module.

// Import the Express library, the counter module, and the logger module

const express = require("express");
const router = express.Router();
const counter = require("./counter");
const logger = require("./logger");

// Increase the counter value by 1 and return the new value as JSON, including logging for the endpoint and the counter increase operation

router.get("/counter-increase", (req, res) => {
  logger.info("[ENDPOINT] GET '/counter-increase'");
  const value = counter.increase();
  logger.info(`[COUNTER] increase ${value}`);
  res.json({ counter: value });
});

// Read the counter value and return it as JSON, including logging for the endpoint and the counter read operation

router.get("/counter-read", (req, res) => {
  logger.info("[ENDPOINT] GET '/counter-read'");
  const value = counter.read();
  logger.info(`[COUNTER] read ${value}`);
  res.json({ counter: value });
});

// Reset the counter value to 0 and return the reset value as JSON, including logging for the endpoint and the counter reset operation

router.get("/counter-reset", (req, res) => {
  logger.info("[ENDPOINT] GET '/counter-reset'");
  const value = counter.reset();
  logger.info("[COUNTER] zeroed 0");
  res.json({ counter: value });
});

// Export the router so it can be used in other modules

module.exports = router;
