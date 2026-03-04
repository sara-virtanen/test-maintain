# **Exercise 6 – Logging: Task 2**

**Author:** Sara Virtanen  
**Course:** AT00BY10-3012 Ohjelmistojen ylläpito ja testaus

## **Task 2 – Tally counter REST API**

The purpose of this task is to create a tally counter REST API with Express, implement logging with Winston as specified in [Logging: Task 1](https://github.com/sara-virtanen/test-maintain/tree/main/Logging/Task1), then finally test the implementation. Manual testing was performed on the endpoints using Postman and the REST Client plugin for VSCode. Unit and integration tests on the modules and endpoints were implemented using Chai and Mocha.

### Table of Contents

- [Project Structure](#project-structure)  
- [Environment](#environment)
- Logging Application
- Testing
- WIP
- WIP  
- WIP  

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
    │       └── src
    │           ├── counter.js
    │           ├── logger.js
    │           ├── main.js
    │           └── routes.js
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

### Installing Express, Winston, Mocha and Chai

To install the specified versions of my dependencies, I ran:  

`npm install --save express@4.18.2 winston@3.11.0 mocha@11.7.5 chai@6.2.2`  

## The Logging Application

### Creating the Logging Configuration  

I created a file called `logger.js` in the `src/` directory and configured it to create logs using Winston.  

I defined the logger to operate at the `"info"` level, which means it records all messages at the info level and every level above it in Winston’s severity hierarchy. The logger applies timestamped JSON formatting to each entry and writes its output to multiple destinations. The console transport displays logs during development, while `error.log` stores only error‑level messages and `combined.log` records all logged events.  

### Creating the Application and Implementing Logging  

I created a main program file called `main.js` in the `src/` directory and integrated the logger into the application.  

I used the logger to emit messages at different severity levels: `info`, `warn` and `error`.

- `logger.log('info', ...)` and `logger.info(...)`  

  - Record general operational messages that describe normal application behavior  

- `logger.log('warn', ...)` and `logger.warn(...)`  

  - Highlight situations that are unusual or potentially problematic but do not stop the application from running  

- `logger.log('error', ...)` and `logger.error(...)`  

  - Capture failures or issues that prevent part of the application from functioning correctly and may require immediate attention  

## Running the Application 

Finally, I ran the application to see the logging in action.  

`node src/main.js`  

Alternatively:  

`cd src` Change directory to `src`  
`node main.js` Run the application in the directory  

## Manual Testing with Postman and REST Client plugin

For testing, I performed manual functional testing by running the application. After running the application, I confirmed that the logs were output into the console and that the log files (`logs/error.log` and `logs/combined.log`) were created and contained the specified log entries with timestamps. Running the application was a simple smoke test which confirmed that the application functioned without errors, and its core functionality, logging, worked as expected.  

## Screenshots  

### Console Log Output  

Running `main.js` logs to console with timestamps  

![Log Files Created](https://github.com/user-attachments/assets/3e694cab-6df4-43f6-80e8-2d2b4163f079)  


---

**Last updated:** 2026‑04-03
