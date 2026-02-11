# **Exercise 5 – GUI testing**

**Author:** Sara Virtanen  
**Course:** AT00BY10-3012 Ohjelmistojen ylläpito ja testaus

## Overview

This exercise focuses on a simple RGB ↔ HEX color converter and the testing of its basic GUI. The goal is to try out a UI testing method and document how the converter behaves with valid and invalid inputs. The emphasis is on observing the application’s behavior, identifying issues in input handling or validation, and presenting the results clearly.  

## Manual Testing of RGB ↔ HEX Converters

I focused on manually verifying the correctness and error‑handling behavior of the RGB→HEX and HEX→RGB converters implemented in the application. The goal was to test a wide range of valid and invalid inputs, observe how the UI responds, and document any unexpected behavior or missing validation.

## **1. Testing Method**

I used an AI-generated HTML/CSS web page as the target application. Testing was performed manually using the HTML interface served through the local Express server. All interactions were carried out directly in the browser (Google Chrome).

![Conversion UI](https://github.com/sara-virtanen/sara-virtanen.github.io/blob/df4ca27e96115b92ca401cffe0c9a42db22ce8d8/Images/UI_Testing/converter_UI_plain.jpg)  

### Testing Workflow Plan
* Enter the specified input into the converter fields (if allowed)
* Trigger the conversion using the appropriate button
* Observe the output displayed in the UI
* Record whether the behavior matches the expected result
* Note any missing validation, incorrect conversions, or unhandled edge cases

## **2. Test Coverage Areas**

The manual tests cover the following categories:

### Valid RGB Inputs
* Standard values (e.g., 255, 0, 128)
* Mixed values (e.g., 12, 200, 99)
* Leading zeros (e.g., 003, 045, 255)

### Invalid RGB Inputs
* Values below 0  
* Values above 255
* Decimal numbers
* Negative numbers
* Empty fields
* Non‑numeric characters
* Partially filled inputs (e.g., only R and G)
* Whitespace or stray characters

### Valid HEX Inputs
* Standard 6‑digit hex (e.g., #FFFFFF, #00A1C2)
* Three digit hex (e.g., #FFF)
* Lowercase and uppercase variants
* Hex without the # prefix

### Invalid HEX Inputs
* Too short or too long (e.g., #FFF, #FFFFF, #1234567)
* Invalid characters (e.g., #GGHHII)
* Missing characters
* Empty input
* Whitespace
* Symbols or punctuation

### UI Behavior & Error Handling
* Does the converter show an error message?
* Does it silently fail?
* Does it produce incorrect output?
* Does the UI allow impossible values to be typed?

## **3. Detailed Test Cases**

### **RGB → HEX Converter**

**Valid RGB Inputs**

| Test Case | Input | Expected Output | Result |
|----------|------|-----------------|---------------|
| Standard white | `255, 255, 255` | `#FFFFFF` | Pass |
| Standard black | `0, 0, 0` | `#000000` | Pass |
| Mixed values | `12, 200, 99` | `#0CC863` | Pass |
| Leading zeros | `003, 045, 255` | `#032DFF` | Pass |

**Invalid RGB Inputs**

| Test Case | Input | Expected Output | Result |
|----------|------|-----------------|---------------|
| Negative values | `-1, 100, 100` | Error | Pass |
| Above max | `300, 0, 0` | Error | Pass |
| Decimal | `12.5, 0, 0` | Error | Pass |
| Letters | `A, 20, 30` | Rejected | Pass |
| One empty field | `"", "100", "100"` | Error | Pass |
| Empty input | `"", "", ""` | Error | Pass |
| Whitespace | `" ", 20, 20` | Rejected | Pass |

Letters and whitespace are not accepted inputs, that is why the expected output is rejection.

### **HEX → RGB Converter**  

These tests were carried out after implementing the fixes outlined in the [testing section below](#hex--rgb-converter-1).  

**Valid HEX Inputs**

| Test Case | Input | Expected Output | Result |
|----------|------|-----------------|---------------|
| Standard white | `#FFFFFF` | `255,255,255` | Pass |
| Standard black | `#000000` | `0,0,0` | Pass |
| Mixed case | `#aBc123` | `171,193,35` | Pass |
| Lower case | `#ffffff` | `255,255,255` | Pass |
| Without # | `FFAACC` | `255,170,204` | Pass |
| Three digits | `#FFF` | `255,255,255` | Pass |

**Invalid HEX Inputs**  

| Test Case | Input | Expected Output | Result |
|----------|------|-----------------|---------------|
| Too short | `#FF` | Error | Pass |
| Too long | `1234567` | Error | Pass |
| Invalid characters | `#GGHHII` | Error | Pass |
| Empty input | `""` | Error | Pass |
| Whitespace | `" "` | Error | Pass |
| Symbols | `@@@###` | Error | Pass |
| Punctuation | `#00,00,` | Error | Pass |
| Calculation | `1+2+3+4` | Error | Pass |

## **4. Test Results**

### **RGB → HEX Converter**

**Valid RGB Inputs**

**Standard white `255, 255, 255` `#FFFFFF`**  

![Standard white](https://github.com/sara-virtanen/sara-virtanen.github.io/blob/4f3c0836fb1ad8b9648babd59742767c94fb30c4/Images/UI_Testing/255255255.jpg)  

**Leading zeros  `003, 045, 255`  `#032DFF`**  

![Leading zeros](https://github.com/sara-virtanen/sara-virtanen.github.io/blob/4f3c0836fb1ad8b9648babd59742767c94fb30c4/Images/UI_Testing/003045255.jpg)  

**Invalid RGB Inputs**

**Negative values `-1, 100, 100` (Error)**  

![Negative values](https://github.com/sara-virtanen/sara-virtanen.github.io/blob/4f3c0836fb1ad8b9648babd59742767c94fb30c4/Images/UI_Testing/negativenro.jpg)  

**Above max `300, 0, 0` (Error)**  

![Above max](https://github.com/sara-virtanen/sara-virtanen.github.io/blob/4f3c0836fb1ad8b9648babd59742767c94fb30c4/Images/UI_Testing/over255.jpg)  

**Decimal `12.5, 0, 0` (Error)**  

![Decimal](https://github.com/sara-virtanen/sara-virtanen.github.io/blob/4f3c0836fb1ad8b9648babd59742767c94fb30c4/Images/UI_Testing/decimal.jpg)  

**One empty field `"", "100", "100"` (Error)**  

![One empty field](https://github.com/sara-virtanen/sara-virtanen.github.io/blob/4f3c0836fb1ad8b9648babd59742767c94fb30c4/Images/UI_Testing/emptyfield.jpg)  

**Letters: an exception appears!**  

![Letters](https://github.com/sara-virtanen/sara-virtanen.github.io/blob/4f3c0836fb1ad8b9648babd59742767c94fb30c4/Images/UI_Testing/exponentE.jpg)  

The RGB converter was set up to block the user from entering any letters, but there is an exception to this. The input type is number, but scientific notation circumvents this, so the letter e (exponent notation) is considered to be valid numeric syntax. - and . are also allowed, even though decimals and negative numbers are then caught later and correctly produce error messages. Inspired by inputting e, I also tested addition in the input field.  

**Addition - just for fun**  

![Addition](https://github.com/sara-virtanen/sara-virtanen.github.io/blob/4f3c0836fb1ad8b9648babd59742767c94fb30c4/Images/UI_Testing/rgbmaths.jpg)  

### **HEX → RGB Converter**  

This isn't supposed to happen...  

![An error appears](https://github.com/sara-virtanen/sara-virtanen.github.io/blob/00b048c790dbcf74a57838e0f721b54076a0dda3/Images/UI_Testing/garbageinputvalidation.jpg)  

...nor is this!  

![More errors](https://github.com/sara-virtanen/sara-virtanen.github.io/blob/00b048c790dbcf74a57838e0f721b54076a0dda3/Images/UI_Testing/moregarbage.jpg)  

During my testing, I noticed that the HEX input field did not enforce any input restrictions. It accepted arbitrary characters, including letters outside the hexadecimal range, symbols, and whitespace. Clicking the conversion button produced a result of RGB(0,0,0) every time. This missing validation feature was identified while testing invalid HEX inputs. This was both fun and useful because it was a concrete example of the importance of testing, and also an opportunity for me to fix the mistake in the AI generated application.  

The AI generated input looked like this:  

```HTML
<input type="text" name="hex" placeholder="#FFFFFF" required>
```

And the AI generated server error handling for the function ```hexToRgb``` looked like this:  

```JavaScript
if (!/^[0-9a-f]{6}$/.test(hex)) {
  return { r: 0, g: 0, b: 0 };
}
```

The fixed input now discriminates based on the characters the user inputs (# is optional, no symbols allowed, no whitespace allowed), and the length of the input. There was no error tooltip message, so I added one to reflect what the expected input should contain. There is a shorter version in some of the screenshots in this section, I added more information to the error message later (the text that is visible in the code block below) to make it completely explicit what the input field expects. It would also be possible to sanitize user inputs using JavaScript, but I did not opt for adding that feature to this implementation.  

```HTML
<input
  type="text"
  name="hex"
  placeholder="#FFFFFF"
  required
  maxlength="7"
  pattern="^#?[0-9A-Fa-f]{3}$|^#?[0-9A-Fa-f]{6}$"
  title="Enter a valid HEX value: 3 or 6 hex digits (0-9, A-F). No spaces or symbols allowed."
/>
```  

If an invalid input manages to pass the input validation, the server will now return an error:  

```JavaScript
if (!/^[0-9a-f]{6}$/.test(hex)) {
  return { error: "Invalid HEX format" };
}
```  

**Valid HEX Inputs**  

**Mixed case `#aBc123` `171,193,35`**  

![Mixed case](https://github.com/sara-virtanen/sara-virtanen.github.io/blob/00b048c790dbcf74a57838e0f721b54076a0dda3/Images/UI_Testing/HexMixedCase.jpg)  

**Without # `FFAACC` `255,170,204`**  

![Without #](https://github.com/sara-virtanen/sara-virtanen.github.io/blob/00b048c790dbcf74a57838e0f721b54076a0dda3/Images/UI_Testing/NoHash.jpg)  

**Three digits `#FFF` `255,255,255`**  

![Three digits](https://github.com/sara-virtanen/sara-virtanen.github.io/blob/00b048c790dbcf74a57838e0f721b54076a0dda3/Images/UI_Testing/threedigithex.jpg)  

**Invalid HEX Inputs**  

**Too short `#FF` (Error)**  

![Too short](https://github.com/sara-virtanen/sara-virtanen.github.io/blob/00b048c790dbcf74a57838e0f721b54076a0dda3/Images/UI_Testing/tooshort.jpg)  

**Too long `1234567` (Error)**  

![Too long](https://github.com/sara-virtanen/sara-virtanen.github.io/blob/00b048c790dbcf74a57838e0f721b54076a0dda3/Images/UI_Testing/1234567.jpg)  

The maximum length for the HEX input box is seven characters, so in order to write an input that is too long, the leading hash symbol has to be omitted. The error tooltip message was not informative enough, so I amended it to better reflect what the expected input should contain.  

**Invalid characters `#GGHHII` (Error)**  

![Invalid characters and improved tooltip](https://github.com/sara-virtanen/sara-virtanen.github.io/blob/00b048c790dbcf74a57838e0f721b54076a0dda3/Images/UI_Testing/bettertooltipGGHHII.jpg)  

**Empty input `""` (Error)**  

![Empty input](https://github.com/sara-virtanen/sara-virtanen.github.io/blob/00b048c790dbcf74a57838e0f721b54076a0dda3/Images/UI_Testing/emptyfield.jpg)  

**Symbols `@@@###` (Error)**  

![Symbols](https://github.com/sara-virtanen/sara-virtanen.github.io/blob/00b048c790dbcf74a57838e0f721b54076a0dda3/Images/UI_Testing/symbols.jpg)  

**Here's an example that wasn't in my tests, but which the backend caught:**  

![Extra error](https://github.com/sara-virtanen/sara-virtanen.github.io/blob/00b048c790dbcf74a57838e0f721b54076a0dda3/Images/UI_Testing/invalid_hex_format.jpg)  

## Thoughts and Reflections

It would be possible to test even a simple graphic user interface such as this in a million and one ways. It took quite a while to plan, carry out and document just this manual testing, so this exercise really served to highlight just how much work goes into testing in general, regardless of the tools or approach.  

Automated testing (unit, integration) was not carried out at this time. It would be possible to write a test suite to automatically test all the inputs that were tested manually here.

---

**Last updated:** 2026‑02‑11
