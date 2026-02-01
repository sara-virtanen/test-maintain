// index.js
// 2026-02-01
// Author: Sara Virtanen

/**
 * @module src/index
 * @description Main entry point for the Express application.
 * Exports the app instance for testing and starts the server when not in test mode.
 */

const express = require("express");
const routes = require("./routes");

const app = express();
const port = 3000;

app.use("/", routes);

/**
 * Start the server only when not running tests.
 */
if (process.env.NODE_ENV !== "test") {
  app.listen(port, () =>
    console.log(`Server running on http://localhost:${port}`)
  );
}

/**
 * Export the Express app instance for integration testing.
 * @type {import("express").Express}
 */
module.exports = app;
