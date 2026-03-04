# **Exercise 6 – Logging: Task 2**

**Author:** Sara Virtanen  
**Course:** AT00BY10-3012 Ohjelmistojen ylläpito ja testaus

## **Task 2 – Tally counter REST API**

The purpose of this task is to create a tally counter REST API with Express, implement logging with Winston as specified in [Logging: Task 1](https://github.com/sara-virtanen/test-maintain/tree/main/Logging/Task1), then finally test the implementation. Manual testing was performed on the endpoints using Postman and the REST Client plugin for VSCode. Unit and integration tests on the modules and endpoints were implemented using Chai and Mocha.

<details>
<summary>Table of Contents (Click to expand)</summary>

- [Project Structure](#project-structure)
- [Environment](#environment)
  - [Requirements / Versions Used](#requirements--versions-used)
  - [Other Tools and Plugins](#other-tools-and-plugins)
  - [Setting Up The Environment](#setting-up-the-environment)
  - [Installing Dependencies](#installing-dependencies)
- [Modules](#modules)  
  - [Express](#express)
    - [Server Error Handling](#server-error-handling)
    - [Graceful Shutdown](#graceful-shutdown)
  - [Logging Configuration](#logging-configuration)
    - [Log Transports](#log-transports)
  - [Express Routes](#express-routes)
    - [Endpoint Definitions](#endpoint-definitions)
  - [Counter Behaviour](#counter-behaviour)
    - [Counter Operations](#counter-operations)
    - [Implementation Details](#implementation-details)
  - [Endpoint Logging](#endpoint-logging)
    - [Log Message Format](#log-message-format)
    - [Server Lifecycle Logging](#server-lifecycle-logging)
- [Testing](#testing)  
  - [Manual Endpoint Testing](#manual-endpoint-testing)
    - [Using Postman](#using-postman)
    - [Using REST Client plugin for VSCode](#using-rest-client-plugin-for-vscode)
  - [Unit and Integration Testing](#unit-and-integration-testing)
    - [Running Tests](#running-tests)
    - [Test Coverage](#test-coverage)
    - [Test Structure](#test-structure)

</details>

## Project Structure

```
test-maintain
    ├── Logging
    |   ├── Task1/
    |   └── Task2
    │       ├── package.json
    │       ├── package-lock.json
    │       ├── README.md
    │       ├── rest.http
    │       ├── src
    │       │   ├── counter.js
    │       │   ├── logger.js
    │       │   ├── main.js
    │       │   └── routes.js
    │       └── test
    │           ├── app.test.js
    │           ├── counter.test.js
    │           ├── logger.test.js
    │           └── routes.test.js
    └── .gitignore
```

## Environment

### Requirements / Versions Used

- Node.js 22.19.0 + npm  
- Express 4.18.2  
- Winston 3.11.0  
- Mocha 11.7.5  
- Chai 6.2.2

### Other Tools and Plugins

- Postman  
- [REST Client plugin for VSCode](https://marketplace.visualstudio.com/items?itemName=humao.rest-client)  

### Setting Up The Environment

In my new project folder `Logging/Task2`, which is inside my git initialized repo, I used git bash to run:  

`npm init -y`  

### Installing Dependencies

To install the specified versions of Express, Winston, Mocha and Chai, I ran:  

`npm install --save express@4.18.2 winston@3.11.0 mocha@11.7.5 chai@6.2.2`  

## Modules

### Express

I tested the Express "Hello World" app by OpenJS Foundation by creating an Express application in `main.js`.

```JavaScript
const express = require('express')
const app = express()
const port = 3000

app.get('/', (req, res) => {
  res.send('Hello World!')
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})
```

**Running the Express app**  

![Console Log](https://github.com/user-attachments/assets/bcef45ba-262a-45e0-b123-3d665728d06b)  

**Navigating to `http://localhost:3000`**  

![Browser localhost](https://github.com/user-attachments/assets/fcad2e43-2387-4044-8188-9e0f7419745f)  

**Testing with Postman**  

![Postman GET](https://github.com/user-attachments/assets/afbab153-1973-47a0-b4a3-af37a25636ad)  

After initial testing, I implemented the Express application in `main.js`. It imports the Express library, creates an application instance, and configures it to listen on port 3000.  

The application is structured to export the Express `app` instance without automatically starting the server. This design allows the application to be imported and tested without binding to a port, which is essential for running automated tests.

The server only starts when `main.js` is executed directly (checked using `require.main === module`). This conditional startup ensures that when the app is imported by test files, it doesn't attempt to start the server.

### Server Error Handling

Running a server in a console window and attempting to start it again in another one resulted in a server startup error, so I implemented error handling for that particular issue. This was accidental on my part, but a valuable lesson on why error handling matters.

The application includes error handling for common server issues:

- **Port conflicts (EADDRINUSE):** If port 3000 is already in use, the application logs an error and exits gracefully
- **General server errors:** Any other server errors are caught, logged, and result in a controlled shutdown  

**Express server already running**

![serverused](https://github.com/user-attachments/assets/5a467cad-9c98-4a16-8eee-df155b50c755)

### Graceful Shutdown

The application listens for termination signals and handles them appropriately:

- **SIGINT:** Triggered when the user presses Ctrl+C in the terminal
- **SIGTERM:** Triggered by system termination signals, such as `kill` commands or container shutdowns

Both signals log a shutdown message and exit cleanly to ensure proper resource cleanup.  

**Shutting the Express server down with Ctrl+C**  

![sigint](https://github.com/user-attachments/assets/7a55e699-fba7-441c-9ec3-fac47cf4ce80)  

### Logging Configuration  

I reused the `logger.js` configuration from Task 1, which was originally authored by Petri Rantanen, the instructor of this course. This module sets up a Winston logger instance that captures application events.

The logger operates at the `"info"` level, which means it records all messages at the info level and every level above it in Winston's severity hierarchy (info, warn, error).

The logger combines two formatting options:

- **Timestamps:** Each log entry includes a timestamp showing when the event occurred  
- **JSON formatting:** Log entries are structured as JSON objects for easier parsing and analysis

### Log Transports

The logger can use three transport mechanisms to output log messages:

- **Console transport:** Logs all messages to the console for real‑time monitoring during development and debugging  
- **Error log file (`logs/error.log`):** Captures only error‑level messages for focused troubleshooting  
- **Combined log file (`logs/combined.log`):** Records all log messages regardless of severity level, providing a complete audit trail

Console transport was not used by the author in Task 2.

### Express Routes  

The `routes.js` module defines three REST API endpoints for interacting with the tally counter. Each endpoint is implemented as a GET route that performs a specific counter operation and returns the result as JSON.

All routes import the Express Router, the counter module, and the logger module. Each endpoint logs two types of information:

- **Endpoint access:** Records which endpoint was called  
- **Counter operation:** Records the specific counter action and its result

### Endpoint Definitions

**GET `/counter-increase`**

- Increases the counter value by 1  
- Returns the new counter value as JSON: `{ "counter": value }`  
- Logs the endpoint call and the increase operation with the resulting value

**GET `/counter-read`**

- Reads the current counter value without modifying it  
- Returns the current counter value as JSON: `{ "counter": value }`  
- Logs the endpoint call and the read operation with the current value

**GET `/counter-reset`**

- Resets the counter value to 0  
- Returns the reset counter value as JSON: `{ "counter": 0 }`  
- Logs the endpoint call and the reset operation

The router is exported and imported by `main.js`, where it is mounted at the root path (`/`).

### Counter Behaviour  

The `counter.js` module implements a simple in‑memory tally counter with three core operations. It maintains a private counter state using a module‑level variable initialized to 0. 

### Counter Operations

**`increase()`**

- Increments the counter by 1 using the pre‑increment operator  
- Returns the new counter value immediately after incrementing  
- Example: if count is 5, `increase()` returns 6

**`read()`**

- Returns the current counter value without modification  
- Allows the application to check the counter state without side effects  
- Example: if count is 5, `read()` returns 5

**`reset()`**

- Sets the counter value back to 0  
- Returns the reset value (0) to confirm the operation  
- Example: regardless of the current value, `reset()` sets count to 0 and returns 0

All three functions are exported as an object so they can be imported and used by the routes module.

### Implementation Details

The counter state is maintained in a closure‑like pattern using a module‑level variable. This means:

- The counter value persists across multiple HTTP requests  
- Each instance of the application maintains its own counter  
- Restarting the server resets the counter to 0  
- The counter is not persisted to a database or file

This simple implementation is suitable for demonstration and testing purposes. In a production environment, the counter state would typically be stored in a database to persist across server restarts and support multiple application instances.

### Endpoint Logging  

Each endpoint in the API logs two pieces of information whenever it is called:

1. **Endpoint access log:** Records that a specific HTTP endpoint was accessed  
2. **Counter operation log:** Records the counter operation that was performed and its result

### Log Message Format

Endpoint access logs follow this format:

```
[ENDPOINT] GET '/counter-increase'
[ENDPOINT] GET '/counter-read'
[ENDPOINT] GET '/counter-reset'
```

Counter operation logs follow these formats:

```
[COUNTER] increase 1
[COUNTER] read 0
[COUNTER] zeroed 0
```

### Server Logging

The main application also logs server events:

```
[MAIN] Starting
[MAIN] Stopping
[MAIN] Port 3000 is already in use
[MAIN] Server error: <error message>
```

These logs provide visibility into when the server starts, stops, or encounters problems during initialization.

All logs are written to:

- `logs/combined.log` for all log levels  
- `logs/error.log` for error‑level messages only  

## Testing  

### Manual Endpoint Testing  

### Using Postman

Manual testing was performed using Postman:

1. Start the server with `node src/main.js`
2. Send GET requests to the following endpoints:
   - `http://localhost:3000/counter-read` – Read the current counter value
   - `http://localhost:3000/counter-increase` – Increase the counter by 1
   - `http://localhost:3000/counter-reset` – Reset the counter to 0
3. Observe the JSON responses and verify the counter behavior
4. Check the console output and log files to verify that operations are being logged correctly

  
**`http://localhost:3000/counter-read` – Read the current counter value**  

![SCR_4_POSTMAN_READ](https://github.com/user-attachments/assets/c052f366-639c-4521-a231-d9ce821eeca3)  

**`http://localhost:3000/counter-increase` – Increase the counter by 1**  

![SCR_5_POSTMAN_INCREASE](https://github.com/user-attachments/assets/cef69ffc-e52c-4b52-9c1e-f7cd7262592a)  

**`http://localhost:3000/counter-reset` – Reset the counter to 0**  

![SCR_6_POSTMAN_RESET](https://github.com/user-attachments/assets/45f1a1a2-faa3-400d-a718-d4feee18d206)  

**Check the console output**  

![SCR_7_POSTMAN_CONSOLE](https://github.com/user-attachments/assets/bbd65fb1-ae87-40ce-bb27-f5243604e9e5)  

**Check the log files**  

![SCR_8_LOGS](https://github.com/user-attachments/assets/49d0eab4-8b4d-4265-829d-842b170eb8a9)


#### Using REST Client plugin for VSCode

The `rest.http` file contains pre‑configured HTTP requests for testing all three endpoints. This file can be used with the [REST Client extension for VSCode](https://marketplace.visualstudio.com/items?itemName=humao.rest-client).

**Contents of `rest.http`:**

```http
### Read the current counter value
GET http://localhost:3000/counter-read

### Increase the counter by one
GET http://localhost:3000/counter-increase

### Reset the counter to zero
GET http://localhost:3000/counter-reset
```

To use this file:

1. Install the REST Client extension in VSCode
2. Open `rest.http` in VSCode
3. Click "Send Request" above any of the requests
4. View the response in the adjacent panel

This approach provides a quick and convenient way to test the API without leaving the code editor.

**Read the current counter value**  

![SCR_12_RESTREAD](https://github.com/user-attachments/assets/20c4079f-0eaf-45be-ba53-dfa0785c1ae4)  


**Increase the counter by one**  

![SCR_10_RESTINCREASE](https://github.com/user-attachments/assets/2046425f-f7d8-4d88-a8e7-23d47d348203)  


**Reset the counter to zero**  

![SCR_10_RESTREAD](https://github.com/user-attachments/assets/94b88f9d-b3d7-4c4f-aa64-ac9e43e83285)  


### Unit and Integration Testing  

Unit and integration tests are implemented using Mocha as the test runner and Chai for assertions.

#### Running Tests

To execute all tests, run:

```
npm test
```

This command runs Mocha, which automatically discovers and executes all test files in the `test/` directory.  

To run a specific test, substitute `NAME_HERE` for the specific file name and then run:

```
npx mocha test/NAME_HERE.test.js
```

### Test Coverage

The test suite is organized into four test files:

**`counter.test.js`**

- Tests the counter module 
- Verifies that `increase()`, `read()`, and `reset()` work correctly  
- Ensures the counter maintains state between operations  
- Tests edge cases and boundary conditions  

![SCR_COUNTER_TEST](https://github.com/user-attachments/assets/53c51e8e-ceba-4e21-a1d7-8a79dbe06f6b)  

**`logger.test.js`**

- Tests the logger configuration  
- Verifies that log levels are set correctly  
- Ensures that transports are configured as expected  
- Confirms that log messages are formatted properly  

![SCR_LOGGER_TEST](https://github.com/user-attachments/assets/529da0a0-51cf-4bd2-a730-0a08e86e7b79)  

**`routes.test.js`**

- Tests the route definitions without starting the server  
- Verifies that routes are correctly mapped to handlers  
- Ensures that the router exports the expected endpoints  
- Tests route handler functions in isolation  

![SCR_ROUTES_TEST](https://github.com/user-attachments/assets/16ba4ca6-7cfa-4e7f-bfe3-68d92ae119ff)  


**`app.test.js`**

- Integration tests that verify the entire application stack  
- Makes HTTP requests to the API  
- Tests all three endpoints with various inputs
- Verifies that JSON responses match expected formats  
- Ensures logging occurs when endpoints are called  
- Tests error handling and edge cases  

![SCR_APP_TEST](https://github.com/user-attachments/assets/45e12625-cac2-4687-bfbe-7049dce00a27)  

The test suite ensures that:

- Individual modules work correctly in isolation (unit tests)
- The application works correctly as a whole (integration tests)
- Logging captures all relevant events
- Error conditions are handled gracefully
- The API returns correctly formatted responses

---

**Last updated:** 2026‑04‑03
