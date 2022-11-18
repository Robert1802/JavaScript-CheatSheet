// Functions

// JavaScript Functions can be defined as chunks of code written in JavaScript to perform a single task
// Its a block of code with a name

// 1. Function Declaration
// This function is hoisted
// This function can be called before its declaration
// This function bind the this keyword to the next closure context
function add(a, b) {
  return a + b;
}

// 2. Function Expression
// This function isn't hoisted and can't be called before It's declaration
const mul = function (a, b) {
  return a * b;
}

// 3. Arrow Function
// This function Isn't hoisted
// Tihs function also bind the this keyword to the current context
// So you cant use this keyword inside this function
const sub = (a, b) => a - b;

// 4. Higher Order Function and Callback
// A callback is a function passed as an argument to another function
// This technique allows a function to call another function
function highOrderFunction(a, b, callback) {
  return callback(a, b);
}

// 5. Pure Function X Impure Function
//Pure Function
function pureSum(a, b) {
  return a + b;
}

// Impure Function
const c = 10;
function impureSum(a, b) {
  return a + b + c;
}

// 9. Currying
// You can call a function with parent function arguments
function parent(a, b) {
  function child(c) {
      return a + b + c;
  }
  return child;
}
//console.log(parent(1, 2)(3));

// 11. Recursion
// You can call a function inside itself
function factorial(n) {
  if (n === 0) {
      return 1;
  }
  return n * factorial(n - 1);
}

//12. Closure
// JavaScript variables can belong to the local or global scope.
// Global variables can be made local (private) with closures.
function closure() {
  let a = 10;
  b
  // Cant acces a variable from child function
  return function () {
      // Can acces a variable from parent function
      const b = 10;
      return a;
  }
}

// Extra - Often Used

// Functions For Throwing Data As Output: The output of data is a common application for functions. You have the following options for outputting data:

prompt()          // This function is used for creating a dialogue box for taking input from the user.
alert()           // This function is used for outputting information in an alert box in the browser window
console.log()     // This function is used for writing data to the browser's console and is used for the purpose of debugging code by developers.
document.write()  // This function is used for writing straight to our HTML document
confirm()         // This function is used for opening up a yes or no dialogue box and for returning a boolean value depending upon the user's click

// Global Functions: Every browser that can run JavaScript has a set of global functions built-in. Some of them are as follows:

x.parseFloat()         // This function is used for parsing the argument passed to it and returning a floating-point number.
x.parseInt()             // This function is used for parsing the argument passed to it and returning an integral number.
x.encodeURI()            // This function is used for encoding a URI into a UTF-8 encoding scheme.
x.decodeURI()            // This function is used for decoding a Uniform Resource Identifier (URI) made by encodeURI() function or similar functions.
x.encodeURIComponent()   // This function is used for the same purpose as encodeURI() only for URI components.
x.decodeURIComponent()   // This function is used for decoding a URI component.
x.isNaN()                // This function is used for determining if a given value is Not a Number or not.
x.Number()               // This function is used for returning a number converted from what is passed as an argument to it.
x.eval()                 //  This function is used for evaluating JavaScript programs presented as strings.
x.isFinite()             // This function is used for determining if a passed value is finite or not.