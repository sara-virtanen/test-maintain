// integration.test.js
// 2026-02-01
// Author: Sara Virtanen

const request = require("supertest");
const expect = require("chai").expect;

process.env.NODE_ENV = "test";
const app = require("../src/index");

describe("Integration Tests: Hex-to-RGB API", () => {
  it("returns RGB for a valid hex code", async () => {
    const res = await request(app).get("/hex-to-rgb/FF5733");
    expect(res.status).to.equal(200);
    expect(res.body).to.deep.equal({ r: 255, g: 87, b: 51 });
  });

  it("returns RGB for a lowercase hex code", async () => {
    const res = await request(app).get("/hex-to-rgb/ff5733");
    expect(res.status).to.equal(200);
    expect(res.body).to.deep.equal({ r: 255, g: 87, b: 51 });
  });

  it("returns RGB for black and white hex codes", async () => {
    const black = await request(app).get("/hex-to-rgb/000000");
    expect(black.status).to.equal(200);
    expect(black.body).to.deep.equal({ r: 0, g: 0, b: 0 });

    const white = await request(app).get("/hex-to-rgb/FFFFFF");
    expect(white.status).to.equal(200);
    expect(white.body).to.deep.equal({ r: 255, g: 255, b: 255 });
  });

  it("returns 400 for invalid hex code", async () => {
    const res = await request(app).get("/hex-to-rgb/INVALID");
    expect(res.status).to.equal(400);
    expect(res.body).to.have.property("error");
  });

  it("returns 400 for hex with invalid characters", async () => {
    const res = await request(app).get("/hex-to-rgb/12G45Z");
    expect(res.status).to.equal(400);
    expect(res.body).to.have.property("error");
  });

  it("returns 400 for hex with invalid length", async () => {
    const shortRes = await request(app).get("/hex-to-rgb/FFF");
    expect(shortRes.status).to.equal(400);

    const longRes = await request(app).get("/hex-to-rgb/FFFFFFF");
    expect(longRes.status).to.equal(400);
  });

  it("returns 404 for missing route", async () => {
    const res = await request(app).get("/hex-to-rgb/");
    expect(res.status).to.be.oneOf([404, 400]);
  });
});
