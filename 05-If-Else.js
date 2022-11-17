// If-Else Statements

/* The if-else statements are simple to comprehend.
You can use them to set conditions for when your code runs.
If specific requirements are met, something is done; if they are not met, another action is taken.
*/

// In JavaScript we have the following conditional statements:
//      Use if to specify a block of code to be executed, if a specified condition is true
//      Use else to specify a block of code to be executed, if the same condition is false
//      Use else if to specify a new condition to test, if the first condition is false
//      Use switch to specify many alternative blocks of code to be executed

const condition = true;

// if Statement
// Use the if statement to specify a block of JavaScript code to be executed if a condition is true.

if (condition) {
  //  block of code to be executed if the condition is true
}

// else Statement
// Use the else statement to specify a block of code to be executed if the condition is false.

if (condition) {
  //  block of code to be executed if the condition is true
} else {
  //  block of code to be executed if the condition is false
}

// else if Statement
// Use the else if statement to specify a new condition if the first condition is false.

if (condition1) {
  //  block of code to be executed if condition1 is true
} else if (condition2) {
  //  block of code to be executed if the condition1 is false and condition2 is true
} else {
  //  block of code to be executed if the condition1 is false and condition2 is false
}

//Example
const time = 13;
if (time < 10) {
    greeting = "Good morning";
  } else if (time < 20) {
    greeting = "Good day";
  } else {
    greeting = "Good evening";
  }
// result: Good Evening

// Ternary Operator
// (condition) ? true-statement : false-statement;
let message = (price > 10) ? 'Expensive' : 'Cheap';