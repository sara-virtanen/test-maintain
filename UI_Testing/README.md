# **Exercise 4 – UI testing**

**Author:** Sara Virtanen  
**Course:** AT00BY10-3012 Ohjelmistojen ylläpito ja testaus

## Overview

This exercise consists of two tasks:

- **Task 1:** Testing a website using browser developer tools  
- **Task 2:** Testing a website with Selenium WebDriver  


# **Task 1 – Developer Tool Testing**

I chose the web page [Sugarologie](https://www.sugarologie.com), a web site focused on science-based baking instructions and recipes.

### **1. Device Emulation (Mobile)**

### Actions Performed
- Opened Chrome DevTools  
- Toggled device toolbar  
- Tested mobile dimensions (iPhone 14 Pro Max)  
- Observed layout changes, responsive behavior and navigation  
- Changed page texts  

### Screenshots

**iPhone front page**
  
  ![iPhone view](https://github.com/sara-virtanen/sara-virtanen.github.io/blob/c4d1e45599ad5dccb5a193876c24d9269e09b2c4/Images/UI_Testing/iPhoneRegular.png)
  
**Edited iPhone front page**
  
  ![Edited iPhone view](https://github.com/sara-virtanen/sara-virtanen.github.io/blob/c4d1e45599ad5dccb5a193876c24d9269e09b2c4/Images/UI_Testing/iPhoneEdited.png)
  
**iPhone UI Testing**
  
  ![iPhone UI Testing](https://github.com/sara-virtanen/sara-virtanen.github.io/blob/c4d1e45599ad5dccb5a193876c24d9269e09b2c4/Images/UI_Testing/iPhoneUITest.jpg)

### Notes & Findings
Testing and editing the UI manually was straightforward, I've done this in the past in other web development courses.


### **2. Network & CPU Throttling**

### Actions Performed
- Set network throttling to **Fast 4G**  
- Enabled 4 × CPU slowdown  
- Reloaded the page
- Interacted with page elements
- Observed delays  

### Screenshots
**Performance with throttling active**
![Network Throttling](https://github.com/sara-virtanen/sara-virtanen.github.io/blob/bdd7412e7b1abe84fd5f2605e4d873fa17d66dbf/Images/UI_Testing/iPhonePerformance.jpg)

### Notes & Findings
Throttling the CPU slowed the page down. The figure reflected on the Largest Contenful Paint (LCP) is good here, but in my other tests the result was not always this good.

### **3. Performance Recording**

### Actions Performed
- Throttling still active
- Started a performance recording  
- Reloaded the page  
- Captured layout, scripting, and rendering metrics  

### Screenshots
![iPhone Performance](https://github.com/sara-virtanen/sara-virtanen.github.io/blob/2378850097c30d98118ee951d49388e6234c6781/Images/UI_Testing/iPhonePerf.jpg)
![Web Page Performance](https://github.com/sara-virtanen/sara-virtanen.github.io/blob/2378850097c30d98118ee951d49388e6234c6781/Images/UI_Testing/WebPagePerf.jpg)
![Web Page Network Requests](https://github.com/sara-virtanen/sara-virtanen.github.io/blob/2378850097c30d98118ee951d49388e6234c6781/Images/UI_Testing/WebPageNetwork.jpg)
![Web Page AI Analysis](https://github.com/sara-virtanen/sara-virtanen.github.io/blob/2378850097c30d98118ee951d49388e6234c6781/Images/UI_Testing/AIPerfAnalysis.jpg)

### Notes & Findings
This was the most interesting and telling part of the testing. Observing how the page loads and what it loads revealed the main factors affecting the load time of the page, and why the page rendering feels so sluggish.




# **Task 2 – Selenium WebDriver Testing**

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
