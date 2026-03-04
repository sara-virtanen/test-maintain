// counter.js
// 2026-04-03
// Author: Sara Virtanen
// Description: A simple tally counter module that supports increase, read, and reset operations.

let count = 0;

// Function to increase the counter by 1 and return the new value

const increase = () => ++count;

// Function to read the current value of the counter

const read = () => count;

// Function to reset the counter to 0 and return the reset value

const reset = () => {
  count = 0;
  return count;
};

// Export the functions for use in other modules

module.exports = { increase, read, reset };
