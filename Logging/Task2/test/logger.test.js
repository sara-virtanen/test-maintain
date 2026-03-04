// logger.test.js
// Unit tests for the logger module

const { expect } = require("chai");
const logger = require("../src/logger");

describe("Logger (Unit Tests)", () => {
  describe("Logger instance", () => {
    it("should be a Winston logger instance", () => {
      expect(logger).to.be.an("object");
      expect(logger.info).to.be.a("function");
      expect(logger.warn).to.be.a("function");
      expect(logger.error).to.be.a("function");
    });

    it("should have the log level set to 'info'", () => {
      expect(logger.level).to.equal("info");
    });
  });

  describe("Transports", () => {
    it("should have three transports configured", () => {
      expect(logger.transports).to.have.lengthOf(3);
    });

    it("should have a Console transport", () => {
      const consoleTransport = logger.transports.find(
        (t) => t.constructor.name === "Console",
      );
      expect(consoleTransport).to.not.be.undefined;
    });

    it("should have a File transport for error.log at 'error' level", () => {
      const errorFileTransport = logger.transports.find(
        (t) => t.constructor.name === "File" && t.filename === "error.log",
      );
      expect(errorFileTransport).to.not.be.undefined;
      expect(errorFileTransport.level).to.equal("error");
      expect(errorFileTransport.dirname).to.equal("logs");
    });

    it("should have a File transport for combined.log", () => {
      const combinedFileTransport = logger.transports.find(
        (t) => t.constructor.name === "File" && t.filename === "combined.log",
      );
      expect(combinedFileTransport).to.not.be.undefined;
      expect(combinedFileTransport.dirname).to.equal("logs");
    });
  });

  describe("Logging functions", () => {
    it("should log an info message without throwing", () => {
      expect(() => logger.info("Test info message")).to.not.throw();
    });

    it("should log a warn message without throwing", () => {
      expect(() => logger.warn("Test warn message")).to.not.throw();
    });

    it("should log an error message without throwing", () => {
      expect(() => logger.error("Test error message")).to.not.throw();
    });
  });
});
