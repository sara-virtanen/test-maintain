# **Exercise 4 – UI testing**

**Author:** Sara Virtanen  
**Course:** AT00BY10-3012 Ohjelmistojen ylläpito ja testaus

# Overview

This exercise consists of two major tasks:

- **Task 1:** Testing a website using browser developer tools  
- **Task 2:** Testing a website with Selenium WebDriver  

The goal of this exercise is to explore practical UI testing techniques, understand browser‑level behavior, and document findings clearly.  


# **Task 1 – Developer Tool Testing**

## **1. Device Emulation (Mobile)**

### Actions Performed
- Opened Chrome DevTools
- Toggled device toolbar
- Tested mobile dimensions (iPhone 14 Pro Max)  
- Observed layout changes, responsive behavior and navigation
- Changed page texts  

### Screenshots
- *Mobile view:*  
  `![Mobile View](Images/mobile_view_placeholder.jpg)`
- *Tablet view:*  
  `![Tablet View](Images/tablet_view_placeholder.jpg)`

### Notes & Findings
(Add your own observations here.)


## **2. Network Throttling**

### Actions Performed
- Set throttling to **Slow 3G**  
- Reloaded the page  
- Observed loading waterfall and delays  
- Tested **Offline mode**  

### Screenshots
`![Network Throttling](Images/network_throttle_placeholder.jpg)`

### Notes & Findings
(Add your own observations here.)


## **3. CPU Throttling**

### Actions Performed
- Enabled 4× CPU slowdown  
- Interacted with page elements  
- Observed animation and script delays  

### Screenshots
`![CPU Throttling](Images/cpu_throttle_placeholder.jpg)`

### Notes & Findings
(Add your own observations here.)


## **4. Performance Recording**

### Actions Performed
- Started a performance recording  
- Reloaded the page  
- Captured layout, scripting, and rendering metrics  

### Screenshots
`![Performance Recording](Images/perf_record_placeholder.jpg)`

### Notes & Findings
(Add your own observations here.)


## **5. DOM Inspection**

### Actions Performed
- Inspected cookie banner  
- Inspected converter forms  
- Verified element structure and CSS  

### Screenshots
`![DOM Inspection](Images/dom_inspection_placeholder.jpg)`

### Notes & Findings
(Add your own observations here.)


# **Task 2 – Selenium WebDriver Testing**

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

### Running the server



### Running Selenium tests



### Taking screenshots
- Use PAUSE delays in tests  
- Capture each step manually  
- Use DevTools for additional inspection  

---

**Last updated:** 2026‑02‑11
