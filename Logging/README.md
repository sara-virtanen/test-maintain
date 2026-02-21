# **Exercise 6 – Logging**

**Author:** Sara Virtanen  
**Course:** AT00BY10-3012 Ohjelmistojen ylläpito ja testaus

## Overview  

This exercise consists of two tasks:  

- **Task 1:** Implementing logging in a Node.js application  
- **Task 2:** Creating a tally counter REST API with Express  

# **Task 1 – Logging**

The purpose of this task is to create a Node.js application and integrate Winston to capture various events into output log files.  

### Project Structure  

```
test-maintain
    ├── Logging
    │   ├── package.json
    │   ├── package-lock.json
    │   ├── README.md
    │   └── src
    │       ├── logger.js
    │       └── main.js
    └── .gitignore
```

### Actions Performed  

- Set up the Node.js project  
- Create a logging configuration  
- Implement logging in the application  
- Run the application  

### Requirements

- Node.js 18 + npm  
- Winston 3.11.0  

## Setting Up The Environment

In my new project folder `Logging`, which is inside my git initialized repo, I used git bash to run:  

`npm init -y`  

### Installing Winston 3.11.0  

`npm install --save winston@3.11.0`  

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

After running the application, I confirmed that the logs were output into the console and that the log files (`logs/error.log` and `logs/combined.log`) were created.  

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



# EVERYTHING UNDER THIS IS WIP

# **Task 2 – Tally counter REST API**

For this task, I used an AI-generated HTML/CSS web page as the target application. This same page will be reused in Exercise 5. Initially I also planned to do Task 1 on this web page, but that would have been too boring in terms of performance or anything to optimize.

![Web Page UI](https://github.com/sara-virtanen/sara-virtanen.github.io/blob/97ef15d7543ef1720f88136763b2d8e12fa2381e/Images/UI_Testing/Test_Website_Overview.png)

## Tools Used in This Exercise

- **Selenium WebDriver** – automates browser interactions and simulates real user behavior
- **pytest** – provides the test runner, assertions, and structured test execution
- **webdriver-manager** – automatically installs and manages the correct ChromeDriver version
- **Google Chrome** – the browser used to execute and validate all UI interactions

## Prerequisites

- NodeJS: 18 + npm  
- Express: 4.18.2  
- Winston: 3.11.0  
- Mocha
- Chai

## Setting Up The Virtual Environment

I used Git Bash to run:

`python3 -m venv selenium-env`  
`source selenium-env/Scripts/activate`  
`pip install --upgrade pip`  
`pip install selenium webdriver-manager pytest`

## Serving the Web Page Locally

I used a simple local Express server written in JavaScript to serve the web page so Selenium is able to interact with it.

`npm init -y`  
`npm install express`

## Starting the server

`node server.js`

The project can be accessed at:

`http://localhost:3000`

## **1. Overview of the Tested Application**

The UI Testing Playground includes:

- A cookie banner
- A navigation bar
- RGB → HEX converter (logic to be tested in Exercise 5)
- HEX → RGB converter (logic to be tested in Exercise 5)
- An embedded YouTube video
- A deeply nested layout section
- Several interactive UI elements

## **2. Implemented Tests**

The following tests verify the functionality and interactive behavior of the application. They are executed using Selenium WebDriver running in Google Chrome via ChromeDriver, and the test suite is implemented in Python using the pytest framework.

### 1. Page Title Metadata Verification

**Function:** `test_page_title_metadata(driver)`

- Opens the application’s front page
- Reads the browser tab title
- Confirms that the title matches the expected value
- Ensures that the correct page is loaded and identifiable

This test validates that the application exposes accurate metadata for browser tabs, bookmarking, and accessibility tools.

### 2. Meta Description Tag Validation

**Function:** `test_meta_description_tag(driver)`

- Locates the `<meta name="description">` element in the document head
- Extracts the `content` attribute
- Verifies that the description matches the expected text

This test demonstrates DOM inspection and ensures that search engines and social media previews receive the correct descriptive metadata.

### 3. Cookie Banner Visibility and Reload Behavior

**Function:** `test_cookie_banner_reload_behavior(driver)`

- Loads the front page and checks that the cookie banner is visible
- Clicks the “Accept cookies” button
- Waits for the page to reload
- Confirms that the banner remains visible (as no backend logic is implemented)

This test verifies that the cookie banner is rendered correctly and that UI elements persist across reloads.

### 4. Navigation Link Scrolling Behavior

**Function:** `test_navigation_link_scrolling(driver)`

- Clicks navigation links in the header
- Waits for the page to scroll to the correct section
- Confirms that the target section is visible in the viewport

This test ensures that anchor‑based navigation behaves as expected and that section IDs are correctly wired.

### 5. RGB Input Field UI Behavior

**Function:** `test_rgb_input_field_ui(driver)`

- Locates the RGB input field
- Types a numeric value into the field
- Verifies that the input is accepted and displayed correctly

This test confirms that the UI accepts user input and updates the field value without validation errors.

### 6. Converter Button Clickability

**Function:** `test_converter_buttons_clickable(driver)`

- Locates both conversion buttons
- Clicks each button to ensure they are interactive
- Confirms that the UI responds to user actions

This test verifies that the conversion controls are present, clickable, and wired to event handlers.

### 7. Intro Section Header Visibility

**Function:** `test_intro_section_header_visible(driver)`

- Scrolls to the intro section
- Locates the section header
- Confirms that the header is visible to the user

This test ensures that key content is rendered and accessible.

### 8. Embedded Video Playback

**Function:** `test_embedded_video_playback(driver)`

- Switches into the YouTube iframe
- Clicks the large play button
- Waits for playback to begin
- Confirms playback by checking the play/pause button state

This test verifies that embedded media loads correctly and responds to user interaction.

### 9. Nested Layout Text Retrieval

**Function:** `test_nested_layout_text_retrieval(driver)`

- Locates a deeply nested element inside a multi‑layer layout
- Extracts its text content
- Confirms that the expected text is present

This test demonstrates the ability to traverse complex DOM structures and validate nested UI content.

## Running the Selenium tests

`pytest -s -v`

The tests are executed with these flags so that custom print() messages appear in the console (-s) and each test clearly reports its final status as PASSED or FAILED in verbose form (-v) during the test run.

## **3. Screenshot of Passed Selenium Tests**

![Selenium pytests](https://github.com/sara-virtanen/sara-virtanen.github.io/blob/1ace50682f4a4dcbe99fef0a280601ae181bbd16/Images/UI_Testing/pytestssss.jpg)

## **4. Findings & Observations**

The cookie banner is purely a visual component with no backend logic connected to it. Although it includes “Accept” and “Reject” buttons, both forms submit to routes that don’t exist, and there’s no JavaScript to update the UI or store any cookie state. Because of this, clicking either button simply reloads the page and the banner reappears exactly as before. The test reflects this by verifying that the banner is visible before the click and remains visible afterward, matching the current implementation of the page.

I played around with `time.sleep()` and implemented a constant named `PAUSE` that I could use to easily set sleep to a certain length in all the tests for observation purposes. This allowed me to visually observe the testing Selenium was doing. It was still a kind of "blink and you'll miss it" sort of thing, but that is a given seeing as this is primarily meant to be automated testing and it isn't meant for viewing by the human eye.

And yes, I rickrolled myself at least ten times while watching the tests run.

---

**Last updated:** 2026‑02‑21
