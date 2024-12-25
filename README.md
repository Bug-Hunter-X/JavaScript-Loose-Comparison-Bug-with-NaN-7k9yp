# JavaScript Loose Comparison Bug with NaN

This repository demonstrates a common, yet subtle, bug in JavaScript related to loose comparison (==) and the handling of NaN (Not a Number).

## The Bug

The `foo` function in `bug.js` intends to compare two numbers for equality. However, it uses loose comparison (==), which doesn't behave as expected with NaN.

NaN is never equal to itself, even under loose comparison.  This means that the function will incorrectly return `false` even when both arguments are NaN.

## The Solution

The `bugSolution.js` file provides a corrected version of the function. Instead of using loose comparison (==), it uses the `Number.isNaN()` function to explicitly check for NaN.

## How to Run

1. Clone the repository.
2. Open the `bug.js` and `bugSolution.js` files in your preferred JavaScript environment.
3. Run the functions with various inputs, including NaN, to observe the difference in behavior.

## Lesson Learned

Always use strict equality (===) when comparing numbers unless you have a specific reason not to.  For NaN comparisons, always use `Number.isNaN()`.