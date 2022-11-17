// Switch Statement

/*
The switch statement is a concept that is comparable to if-else.
The switch however allows you to choose which of several code blocks to run.
*/

// The JavaScript Switch Statement
// Use the switch statement to select one of many code blocks to be executed.

switch(expression) {
    case x:
      // code block
      break;
    case y:
      // code block
      break;
    default:
      // code block
  }

// This is how it works:
//      The switch expression is evaluated once.
//      The value of the expression is compared with the values of each case.
//      If there is a match, the associated block of code is executed.
//      If there is no match, the default code block is executed.

// The break Keyword
//      When JavaScript reaches a break keyword, it breaks out of the switch block.
//      This will stop the execution inside the switch block.
//      It is not necessary to break the last case in a switch block. The block breaks (ends) there anyway.

//The default Keyword
//      The default keyword specifies the code to run if there is no case match
//      The default case does not have to be the last case in a switch block

// Strict Comparison
//      Switch cases use strict comparison (===).
//      The values must be of the same type to match.
//      A strict comparison can only be true if the operands are of the same type.

// Common Code Blocks
// Sometimes you will want different switch cases to use the same code.
// In this example case 4 and 5 share the same code block, and 0 and 6 share another code block:

//Example
// The getDay() method returns the weekday as a number between 0 and 6.
// (Sunday=0, Monday=1, Tuesday=2 ..)
switch (new Date().getDay()) {
  case 4:
  case 5:
    text = "Soon it is Weekend";
    break;
  case 0:
  case 6:
    text = "It is Weekend";
    break;
  default:
    text = "Looking forward to the Weekend";
}

// Example
// The getDay() method returns the weekday as a number between 0 and 6.
// (Sunday=0, Monday=1, Tuesday=2 ..)
switch (new Date().getDay()) {
    case 0:
      day = "Sunday";
      break;
    case 1:
      day = "Monday";
      break;
    case 2:
       day = "Tuesday";
      break;
    case 3:
      day = "Wednesday";
      break;
    case 4:
      day = "Thursday";
      break;
    case 5:
      day = "Friday";
      break;
    case 6:
      day = "Saturday";
  }
//The result of day will be: Tuesday

// Example with string values
const fruits = "Banana";
switch (fruits) {
case  "Banana":
    alert("It is a Banana")
    break;
  
case  "Apple":
    alert("It is an Apple")
    break;    
}