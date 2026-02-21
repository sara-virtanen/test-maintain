// logger.js
// 2026-21-02
// Author: Petri Rantanen
// Used for educational purposes by Sara Virtanen
// Description: This module sets up a logger using the Winston library, allowing for logging messages to both the console and files with different log levels.

// Import the Winston library components

const { createLogger, transports, format } = require("winston");

// Create a logger instance

const logger = createLogger({
  level: "info", // Set the minimum log level to 'info'
  format: format.combine(format.timestamp(), format.json()), // Combine timestamp and JSON formatting for log messages
  transports: [
    new transports.Console(), // Log messages to the console
    new transports.File({ filename: "logs/error.log", level: "error" }), // Log error messages to 'error.log'
    new transports.File({ filename: "logs/combined.log" }), // Log all messages to 'combined.log'
  ],
});

// Export the logger instance for use in other modules

module.exports = logger;
