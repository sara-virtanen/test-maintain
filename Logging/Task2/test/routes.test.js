// routes.test.js
// 2026-04-03
// Author: Sara Virtanen
// Integration tests for the Express routes (endpoints)
// Uses the exported app from main.js with Node's built-in http module to make requests without starting a persistent server

const { expect } = require("chai");
const http = require("http");
const app = require("../src/main");
const counter = require("../src/counter");

// Helper function to make a GET request to the app and return the parsed JSON response

const request = (path) => {
  return new Promise((resolve, reject) => {
    const server = app.listen(0, () => {
      const port = server.address().port;
      http
        .get(`http://localhost:${port}${path}`, (res) => {
          let data = "";
          res.on("data", (chunk) => (data += chunk));
          res.on("end", () => {
            server.close();
            resolve({
              status: res.statusCode,
              body: JSON.parse(data),
            });
          });
        })
        .on("error", (err) => {
          server.close();
          reject(err);
        });
    });
  });
};

// Helper function that returns the raw response without parsing JSON (for non-JSON responses like 404)

const requestRaw = (path) => {
  return new Promise((resolve, reject) => {
    const server = app.listen(0, () => {
      const port = server.address().port;
      http
        .get(`http://localhost:${port}${path}`, (res) => {
          let data = "";
          res.on("data", (chunk) => (data += chunk));
          res.on("end", () => {
            server.close();
            resolve({
              status: res.statusCode,
              body: data,
            });
          });
        })
        .on("error", (err) => {
          server.close();
          reject(err);
        });
    });
  });
};

describe("Routes (Integration Tests)", () => {
  // Reset the counter before each test to ensure a clean state

  beforeEach(() => {
    counter.reset();
  });

  describe("GET /counter-read", () => {
    it("should return status 200", async () => {
      const res = await request("/counter-read");
      expect(res.status).to.equal(200);
    });

    it("should return the current counter value as JSON", async () => {
      const res = await request("/counter-read");
      expect(res.body).to.deep.equal({ counter: 0 });
    });
  });

  describe("GET /counter-increase", () => {
    it("should return status 200", async () => {
      const res = await request("/counter-increase");
      expect(res.status).to.equal(200);
    });

    it("should increase the counter and return the new value", async () => {
      const res = await request("/counter-increase");
      expect(res.body).to.deep.equal({ counter: 1 });
    });

    it("should increase the counter cumulatively across requests", async () => {
      await request("/counter-increase");
      const res = await request("/counter-increase");
      expect(res.body).to.deep.equal({ counter: 2 });
    });
  });

  describe("GET /counter-reset", () => {
    it("should return status 200", async () => {
      const res = await request("/counter-reset");
      expect(res.status).to.equal(200);
    });

    it("should reset the counter to 0 and return it", async () => {
      await request("/counter-increase");
      await request("/counter-increase");
      const res = await request("/counter-reset");
      expect(res.body).to.deep.equal({ counter: 0 });
    });

    it("should read 0 after a reset", async () => {
      await request("/counter-increase");
      await request("/counter-reset");
      const res = await request("/counter-read");
      expect(res.body).to.deep.equal({ counter: 0 });
    });
  });

  describe("Unknown routes", () => {
    it("should return status 404 for an undefined route", async () => {
      const res = await requestRaw("/nonexistent");
      expect(res.status).to.equal(404);
    });
  });
});
