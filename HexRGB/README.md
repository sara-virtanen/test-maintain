# **Exercise 3 – Integration Testing**

**Author:** Sara Virtanen  
**Course:** AT00BY10-3012 Ohjelmistojen ylläpito ja testaus

## Overview

This project implements a small REST API using **Node.js** and **Express**.  
The API exposes a single route that converts a hexadecimal color value into its RGB representation.  
The assignment also required:

- A conversion function
- Unit tests (Mocha + Chai)
- Integration tests (Mocha + Chai + Supertest)
- Postman testing

The goal of this exercise is to build and test a simple REST API using Express.
The API must convert a hexadecimal color value into its RGB representation.
The assignment focuses on writing both unit and integration tests and verifying the API manually using a REST client such as Postman.

---

## Project Folder Structure

```
HexRGB/
    ├── src/
    │   ├── hexToRgb.js
    │   ├── index.js
    │   └── routes.js
    ├── test/
    │   ├── unit.test.js
    │   └── integration.test.js
    ├── package.json
    └── README.md
```

---

## Prerequisites

- Node.js installed
- npm available on the command line

---

## How I Set Up the Environment

Inside the `HexRGB/` directory, I ran:

```
npm init -y
npm install express
npm install --save-dev mocha chai supertest
```

### package.json test script

I added a test script so Mocha runs automatically:

```json
{
  "scripts": {
    "test": "mocha"
  }
}
```

---

## hexToRgb.js

A standalone utility function that converts a 6‑digit hex color string into an RGB object.

- Accepts uppercase, lowercase, and optional leading `#`
- Validates input length and characters
- Throws an error for invalid hex values

Example return value:

```json
{ "r": 255, "g": 87, "b": 51 }
```

---

## routes.js

Defines the REST API route:

```
GET /hex-to-rgb/:hex
```

- Calls the `hexToRgb` function
- Returns JSON on success
- Returns HTTP 400 with an error message on invalid input

---

## index.js

Sets up the Express application and loads the routes.

- Exports the Express `app` instance for testing
- Starts the server only when not in test mode

Run the server manually with:

```
node src/index.js
```

---

## Unit Tests (unit.test.js)

Unit tests verify the behavior of the `hexToRgb` function.

The tests cover:

- Uppercase hex
- Lowercase hex
- Leading `#`
- Boundary values (`000000`, `FFFFFF`)
- Invalid characters
- Invalid lengths
- Non‑string input

Run all tests:

```
npm test
```

---

## Integration Tests (integration.test.js)

Integration tests verify the REST API route using **Supertest**.

The tests cover:

- Valid hex input
- Lowercase input
- Boundary values
- Invalid characters
- Invalid length
- Missing route

These tests import the Express `app` directly without starting the server.

---

## Postman Testing

I tested the API manually using Postman.

### Valid request

```
GET http://localhost:3000/hex-to-rgb/FF5733
```

Expected output:

```json
{ "r": 255, "g": 87, "b": 51 }
```

### Invalid request

```
GET http://localhost:3000/hex-to-rgb/12G45Z
```

Expected output:

```json
{ "error": "Invalid hex code" }
```

I included screenshots of both requests in my submission.

---

## Test Results

Running `npm test` executes both unit and integration tests.  
All tests passed successfully.

I included a screenshot of the full test output in my submission.

---

**Last updated:** 2026‑02‑02
