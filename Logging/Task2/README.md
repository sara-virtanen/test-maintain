# **Exercise 6 – Logging: Task 2**

**Author:** Sara Virtanen  
**Course:** AT00BY10-3012 Ohjelmistojen ylläpito ja testaus

# **Task 2 – Tally counter REST API**

The purpose of this task is to create a tally counter REST API with Express.  

### Project Structure  

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

### Actions Performed  

- WIP
- WIP  
- WIP
- WIP

### Requirements / Versions Used

- Node.js 22.19.0 + npm  
- Express 4.18.2  
- Winston 3.11.0  
- Mocha x  
- Chai x  

## Setting Up The Environment

In my new project folder `Logging/Task2`, which is inside my git initialized repo, I used git bash to run:  

`npm init -y`  

### Installing Express 4.18.2 & Winston 3.11.0

`npm install --save express@4.18.2 winston@3.11.0`  

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

## Testing: Smoke Test & Manual Functional Testing

For testing, I performed manual functional testing by running the application. After running the application, I confirmed that the logs were output into the console and that the log files (`logs/error.log` and `logs/combined.log`) were created and contained the specified log entries with timestamps. Running the application was a simple smoke test which confirmed that the application functioned without errors, and its core functionality, logging, worked as expected.  

## Screenshots  

### Console Log Output  

Running `main.js` logs to console with timestamps  

![Log Files Created](https://github.com/user-attachments/assets/3e694cab-6df4-43f6-80e8-2d2b4163f079)  

### Log Files Successfully Created  

Log files `logs/error.log` and `logs/combined.log` created  

![Console Log Output](https://github.com/user-attachments/assets/1489194f-2b34-4f61-9ef7-0683ba00c6b8)  

### Log File Contents  

Log files contain JSON log entries with timestamps. `error.log` only contains error messages, `combined.log` captures all logs entries.  

![Log File Contents](https://github.com/user-attachments/assets/8e012d27-1acd-4b71-b72a-b5f30e575065)  

---

**Last updated:** 2026‑02‑22
