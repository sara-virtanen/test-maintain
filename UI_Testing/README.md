# **Exercise 4 – UI testing**

**Author:** Sara Virtanen  
**Course:** AT00BY10-3012 Ohjelmistojen ylläpito ja testaus

## Overview

This exercise consists of two tasks:

- **Task 1:** Testing a website using Chrome developer tools  
- **Task 2:** Testing a website with Selenium WebDriver  


# **Task 1 – DevTools Testing**

I chose the web page [Sugarologie](https://www.sugarologie.com), a web site focused on science-based baking instructions and recipes.  

Sugarologie is built on [Webflow](https://webflow.com), which is an AI-powered "Website Experience Platform" that allows users to design, build, and launch fully custom, responsive websites visually, without writing code. This means that there is an underlying framework that likely makes the web page clunky and slightly slow by design.

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
Testing and editing the UI elements manually was straightforward, I've done this in the past in other web development courses.


### **2. Network & CPU Throttling**

### Actions Performed
- Set network throttling to **Fast 4G**  
- Enabled 4 × CPU slowdown  
- Hard reloaded the page
- Interacted with page elements
- Observed delays  

### Screenshots
**Performance with throttling active**  

![Network Throttling](https://github.com/sara-virtanen/sara-virtanen.github.io/blob/bdd7412e7b1abe84fd5f2605e4d873fa17d66dbf/Images/UI_Testing/iPhonePerformance.jpg)

### Notes & Findings
Throttling the CPU slowed the page down. The figure reflected on the Largest Contentful Paint (LCP) is good here, but in my other tests the result was not always this good.

### **3. Performance Recording**

### Actions Performed
- Throttling still active
- Started a performance recording  
- Hard reloaded the page  
- Captured layout, scripting, and rendering metrics  

### Screenshots

**iPhone Performance Recording**

![iPhone Performance](https://github.com/sara-virtanen/sara-virtanen.github.io/blob/2378850097c30d98118ee951d49388e6234c6781/Images/UI_Testing/iPhonePerf.jpg)  

**Web Page Performance Recording**  

![Web Page Performance](https://github.com/sara-virtanen/sara-virtanen.github.io/blob/2378850097c30d98118ee951d49388e6234c6781/Images/UI_Testing/WebPagePerf.jpg)  

**Web Page Network Requests**

![Web Page Network Requests](https://github.com/sara-virtanen/sara-virtanen.github.io/blob/2378850097c30d98118ee951d49388e6234c6781/Images/UI_Testing/WebPageNetwork.jpg)  

**AI Analysis of Network Requests**

![Web Page AI Analysis](https://github.com/sara-virtanen/sara-virtanen.github.io/blob/2378850097c30d98118ee951d49388e6234c6781/Images/UI_Testing/AIPerfAnalysis.jpg)  

### Notes & Findings
This was the most interesting and telling part of the testing. Observing how the page loads revealed the main factors affecting the load time of the page, and why the page feels so sluggish.  

I used hard reloads (CTRL + Shift + R) to see the real time it takes for the page to load without having cached elements. It consistently took ~400 ms and up to 700 ms for the slowest JavaScript files on the page to load. These were Substack scripts, which are responsible for loading third-party code. They bloat the network requests and slow the page down. The slow JavaScript was mainly related to tracking, analytics and ads. This is a major source of bloat on the modern Internet because all of the aforementioned features are important for commercial web pages (is there anything non-commercial left?).

I used the integrated DevTools AI to see how it would analyze the web page and its network requests. Its main findings were that the LCP is slow and that there is high main thread activity from third-party scripts. The AI assistant's suggestion for fixing the load times was:  
> reducing and deferring the loading of third-party code can help prioritize your page's content and improve load performance  

I also ran the web page through [DebugBear](https://www.debugbear.com/test/website-speed)'s free Website Speed Test. Here are the recommendations for optimization according to DebugBear.  

![DebugBear Analysis](https://github.com/sara-virtanen/sara-virtanen.github.io/blob/58addc1f28125f96edb9bc9876826da78d10e637/Images/UI_Testing/DebugBearRecs.jpg)  

# **Task 2 – Selenium WebDriver Testing**

For this task, I used an AI-generated HTML/CSS web page as the target application. This same page will be reused in Exercise 5. Initially I also planned to do Task 1 on this web page, but that would have been too boring in terms of performance or anything to optimize.

![Web Page UI](https://github.com/sara-virtanen/sara-virtanen.github.io/blob/97ef15d7543ef1720f88136763b2d8e12fa2381e/Images/UI_Testing/Test_Website_Overview.png)

## Prerequisites

- Python 3.x.x (I used 3.13.7)
- Node.js + npm
- Google Chrome

## Setting Up The Virtual Environment

I used Git Bash to run:

```
python3 -m venv selenium-env
source selenium-env/Scripts/activate
pip install --upgrade pip
pip install selenium webdriver-manager pytest
```

## Serving the Web Page Locally

I used a simple local Express server written in JavaScript to serve the web page so Selenium is able to interact with it.

```
npm init -y
npm install express
```  

The server exposes the project directory at:

```http://localhost:3000```

## Starting the server

```node server.js```

## Running the Selenium tests

```pytest -v```

## **1. Overview of the Tested Application**

The UI Testing Playground includes:

- A cookie banner
- A navigation bar
- RGB → HEX converter (logic tested in Exercise 5)
- HEX → RGB converter (logic tested in Exercise 5)
- An embedded YouTube video
- A deeply nested layout section
- Several interactive UI elements

## **2. Selenium Test Suite**

These tests validate:

- Page metadata
- Cookie banner visibility
- Navigation behavior
- Input field interaction  
- Button clickability  
- Section visibility
- Video iframe presence
- Nested layout rendering  


## **3. Screenshot of Selenium Tests in Action**

![Selenium Tests](https://github.com/sara-virtanen/sara-virtanen.github.io/blob/9310010053ae5231cb4745d97e40146d6358c401/Images/UI_Testing/selenium_tests_passed.jpg)


## **4. Findings & Observations**

(Add your own conclusions here.)

---

**Last updated:** 2026‑02‑11
