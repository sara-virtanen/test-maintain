# **Exercise 6 – Logging: Task 2**

**Author:** Sara Virtanen  
**Course:** AT00BY10-3012 Ohjelmistojen ylläpito ja testaus

## **Task 2 – Tally counter REST API**

The purpose of this task is to create a tally counter REST API with Express, implement logging with Winston as specified in [Logging: Task 1](https://github.com/sara-virtanen/test-maintain/tree/main/Logging/Task1), then finally test the implementation. Manual testing was performed on the endpoints using Postman and the REST Client plugin for VSCode. Unit and integration tests on the modules and endpoints were implemented using Chai and Mocha.

### Table of Contents

- [Project Structure](#project-structure)
- [Environment](#environment)
- [Modules](#modules)  
  - [Express - Hello World](#express--hello-world)
  - [Logging Configuration](#logging-configuration)
  - [Express Routes](#express-routes)
  - [Counter Behaviour](#counter-behaviour)
  - [Endpoint Logging](#endpoint-logging)
- [Testing](#testing)  
  - [Manual Endpoint Testing](#manual-endpoint-testing)
  - [Unit and Integration Testing](#unit-and-integration-testing)

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

### Express – Hello World



### Logging Configuration  

I created a file called `logger.js` in the `src/` directory and configured it to create logs using Winston.  

I defined the logger to operate at the `"info"` level, which means it records all messages at the info level and every level above it in Winston’s severity hierarchy. The logger applies timestamped JSON formatting to each entry and writes its output to multiple destinations. The console transport displays logs during development (not used in Task 2), while `error.log` stores only error‑level messages and `combined.log` records all logged events.  

### Express Routes  



### Counter Behaviour  



### Endpoint Logging  



## Testing  

### Manual Endpoint Testing  

using Postman and REST Client plugin for VSCode

### Unit and Integration Testing  

using mocha and chai

---

**Last updated:** 2026‑04-03
