// Functions

// JavaScript Functions can be defined as chunks of code written in JavaScript to perform a single task
// Its a block of code with a name

function functionName(parameters) {
    // code to be executed
  }

// Example:
function myFunction(a, b) {
    return a * b;
  }

// Function Expressions
// A JavaScript function can also be defined using an expression.
// A function expression can be stored in a variable:
// Example
const x = function (a, b) {return a * b};  // anonymous function
let z = x(4, 3);

// Function() Constructor
// As you have seen in the previous examples, JavaScript functions are defined with the function keyword.
// Functions can also be defined with a built-in JavaScript function constructor called Function().
// Example
const myFunction = new Function("a", "b", "return a * b");
let c = myFunction(4, 3);

// Function Hoisting
// Hoisting is JavaScript's default behavior of moving declarations to the top of the current scope.
// Hoisting applies to variable declarations and to function declarations.
// Because of this, JavaScript functions can be called before they are declared:
myFunction(5);

function myFunction(y) {
  return y * y;
}

// Self-Invoking Functions
// A self-invoking expression is invoked (started) automatically, without being called.
// Function expressions will execute automatically if the expression is followed by ().
// You cannot self-invoke a function declaration.
// You have to add parentheses around the function to indicate that it is a function expression:
// Example
(function () {
  let x = "Hello!!";  // I will invoke myself
})();

// Functions Can Be Used as Values
// Example
function myFunction(a, b) {
  return a * b;
}

let d = myFunction(4, 3);

// Functions are Objects
// The typeof operator in JavaScript returns "function" for functions, but JavaScript functions can best be described as objects.
// JavaScript functions have both properties and methods.

// The arguments.length property returns the number of arguments received when the function was invoked:
// Example
function myFunction(a, b) {
  return arguments.length;
}

// The toString() method returns the function as a string:
// Example
function myFunction(a, b) {
  return a * b;
}

let text = myFunction.toString();

// Arrow Functions
// Arrow functions allows a short syntax for writing function expressions.
// You don't need the function keyword, the return keyword, and the curly brackets.

// Example
// ES5
var x1 = function(x, y) {
  return x * y;
}

// ES6
const x2 = (x, y) => x * y;

// You can only omit the return keyword and the curly brackets if the function is a single statement. Because of this, it might be a good habit to always keep them:
// Example
const x3 = (x, y) => { return x * y };