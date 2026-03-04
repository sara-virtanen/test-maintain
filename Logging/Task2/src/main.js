// main.js
// 2026-04-03
// Author: Sara Virtanen
// Description: Creates the Express app, applies routes, and starts the server. Exports the app so tests can use it without starting the server.

// Import the Express library and the routes defined in the routes module

const express = require("express");
const routes = require("./routes");
const logger = require("./logger");

// Create an Express application instance and define the port number for the server to listen on

const app = express();
const port = 3000;

// Use the routes defined in the routes module for all requests to the root path

app.use("/", routes);

// Start the server and listen on the specified port, but only if this module is being run directly

if (require.main === module) {
  const server = app.listen(port, () => {
    logger.info("[MAIN] Starting");
  });

  // Handle server errors such as port already in use (EADDRINUSE)

  server.on("error", (error) => {
    if (error.code === "EADDRINUSE") {
      logger.error(`[MAIN] Port ${port} is already in use`);
    } else {
      logger.error(`[MAIN] Server error: ${error.message}`);
    }
    process.exit(1);
  });

  // Handle graceful shutdown on SIGINT (ie. when the user uses Ctrl+C in the terminal)

  process.on("SIGINT", () => {
    logger.info("[MAIN] Stopping: User requested shutdown (SIGINT)");
    process.exit(0);
  });

  // Handle graceful shutdown on SIGTERM (ie. when the process receives a termination signal such as a kill command or container shutdown)

  process.on("SIGTERM", () => {
    logger.info("[MAIN] Stopping: Process received termination signal (SIGTERM)");
    process.exit(0);
  });
}

// Allow other modules to import the app without starting the server

module.exports = app;
