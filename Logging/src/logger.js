// logger.js
// 2026-21-02
// Author: Petri Rantanen
// Used for educational purposes by Sara Virtanen
// Description: This module sets up a logger using the Winston library, allowing for logging messages to both the console and files with different log levels.

const { createLogger, transports, format } = require("winston");

const logger = createLogger({
  level: "info",
  format: format.combine(format.timestamp(), format.json()),
  transports: [
    new transports.Console(),
    new transports.File({ filename: "logs/error.log", level: "error" }),
    new transports.File({ filename: "logs/combined.log" }),
  ],
});

module.exports = logger;
