// index.js
// 2026-02-01
// Author: Sara Virtanen

/**
 * @module src/index
 * @description Main entry point for the Express application.
 * Initializes the Express app, attaches routes, and starts the server
 * when not running in test mode.
 */

const express = require("express");
const routes = require("./routes");

/**
 * The Express application instance.
 * @type {object}
 */
const app = express();

const port = 3000;

/**
 * Register application routes.
 */
app.use("/", routes);

/**
 * Start the server only when not running tests.
 */
if (process.env.NODE_ENV !== "test") {
  app.listen(port, () => {
    console.log(`Server running on http://localhost:${port}`);
  });
}

/**
 * Export the Express app instance for integration testing.
 * @type {object}
 */
module.exports = app;
