# **Exercise 4 – UI testing**

**Author:** Sara Virtanen  
**Course:** AT00BY10-3012 Ohjelmistojen ylläpito ja testaus

## Overview

This exercise consists of two tasks:

- **Task 1:** Testing a website using browser developer tools  
- **Task 2:** Testing a website with Selenium WebDriver  


## **Task 1 – Developer Tool Testing**

### **1. Device Emulation (Mobile)**

### Actions Performed
- Opened Chrome DevTools  
- Toggled device toolbar  
- Tested mobile dimensions (iPhone 14 Pro Max)  
- Observed layout changes, responsive behavior and navigation  
- Changed page texts  

### Screenshots
- **iPhone front page**  
  ![iPhone view](https://github.com/sara-virtanen/sara-virtanen.github.io/blob/c4d1e45599ad5dccb5a193876c24d9269e09b2c4/Images/UI_Testing/iPhoneRegular.png)
- **Edited iPhone front page**  
  ![Edited iPhone view](https://github.com/sara-virtanen/sara-virtanen.github.io/blob/c4d1e45599ad5dccb5a193876c24d9269e09b2c4/Images/UI_Testing/iPhoneEdited.png)
- **iPhone UI Testing**  
  ![iPhone UI Testing](https://github.com/sara-virtanen/sara-virtanen.github.io/blob/c4d1e45599ad5dccb5a193876c24d9269e09b2c4/Images/UI_Testing/iPhoneUITest.jpg)

### Notes & Findings
(Add your own observations here.)


### **2. Network Throttling**

### Actions Performed
- Set throttling to **Slow 3G**  
- Reloaded the page  
- Observed loading waterfall and delays  
- Tested **Offline mode**  

### Screenshots
`![Network Throttling](Images/network_throttle_placeholder.jpg)`

### Notes & Findings
(Add your own observations here.)


### **3. CPU Throttling**

### Actions Performed
- Enabled 4× CPU slowdown  
- Interacted with page elements  
- Observed animation and script delays  

### Screenshots
`![CPU Throttling](Images/cpu_throttle_placeholder.jpg)`

### Notes & Findings
(Add your own observations here.)


### **4. Performance Recording**

### Actions Performed
- Started a performance recording  
- Reloaded the page  
- Captured layout, scripting, and rendering metrics  

### Screenshots
`![Performance Recording](Images/perf_record_placeholder.jpg)`

### Notes & Findings
(Add your own observations here.)


### **5. DOM Inspection**

### Actions Performed
- Inspected cookie banner  
- Inspected converter forms  
- Verified element structure and CSS  

### Screenshots
`![DOM Inspection](Images/dom_inspection_placeholder.jpg)`

### Notes & Findings
(Add your own observations here.)


## **Task 2 – Selenium WebDriver Testing**

## Prerequisite

- Node.js installed
- Python 3.x installed (I have 3.13) & correctly configured to PATH

## Setting Up The Virtual Environment

Inside the directory, I used Git Bash to run:

```
python3 -m venv selenium-env
source selenium-env/Scripts/activate
pip install --upgrade pip
pip install selenium webdriver-manager pytest
npm init -y
npm install express
```

## **1. Overview of the Tested Application**

I created a simple UI Testing Playground website with:

- Cookie banner  
- Navigation bar  
- RGB → HEX converter  
- HEX → RGB converter  
- Embedded video  
- Nested layout section  

The backend was implemented in Node.js and Express.


## **2. Selenium Test Suite**

The test suite includes:

- Page metadata tests  
- Cookie banner interaction  
- Navigation tests  
- RGB → HEX conversion tests  
- HEX → RGB conversion tests  
- UI element visibility tests  


## **3. Screenshots of Selenium Tests in Action**

(Add your own screenshots here.)

`![Selenium Test Screenshot](Images/selenium_placeholder.jpg)`


## **4. Findings & Observations**

(Add your own conclusions here.)


## **5. Instructions for Running & Testing**

### Starting the server

```node server.js```

### Running Selenium tests

In a new terminal window:
```pytest -v```

### Taking screenshots
- Use PAUSE delays in tests  
- Capture each step manually  
- Use DevTools for additional inspection  

---

**Last updated:** 2026‑02‑11
