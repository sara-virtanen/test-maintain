// app.test.js
// 2026-04-03
// Author: Sara Virtanen
// Integration tests for the Express application (main.js)
// Verifies that the app is properly configured and exports correctly for testing

const { expect } = require("chai");
const app = require("../src/main");

describe("App (Integration Tests)", () => {
  describe("Express app export", () => {
    it("should export an Express application", () => {
      expect(app).to.be.a("function");
    });

    it("should have a 'listen' method", () => {
      expect(app.listen).to.be.a("function");
    });

    it("should have a 'use' method", () => {
      expect(app.use).to.be.a("function");
    });
  });

  describe("Middleware stack", () => {
    it("should have the router mounted", () => {
      // Express stores middleware in app._router.stack
      const routerLayer = app._router.stack.find(
        (layer) => layer.name === "router",
      );
      expect(routerLayer).to.not.be.undefined;
    });
  });

  describe("Server start", () => {
    it("should be able to start and stop listening on a random port", (done) => {
      const server = app.listen(0, () => {
        const port = server.address().port;
        expect(port).to.be.a("number");
        expect(port).to.be.greaterThan(0);
        server.close(done);
      });
    });
  });
});
