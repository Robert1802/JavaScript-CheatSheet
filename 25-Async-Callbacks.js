// Callbacks

// A callback is a function passed as an argument to another function
// This technique allows a function to call another function
// A callback function can run after another function has finished

// Function Sequence
// JavaScript functions are executed in the sequence they are called. Not in the sequence they are defined.
function myFirst() {
  myDisplayer("Hello");
}

function mySecond() {
  myDisplayer("Goodbye");
}

myFirst();
mySecond();

// Sequence Control
// Sometimes you would like to have better control over when to execute a function.
// Suppose you want to do a calculation, and then display the result.
// You could call a calculator function (myCalculator), save the result, and then call another function (myDisplayer) to display the result:
function myDisplayer(some) {
  document.getElementById("demo").innerHTML = some;
}

function myCalculator(num1, num2) {
  let sum = num1 + num2;
  return sum;
}

let result = myCalculator(5, 5);
myDisplayer(result);

// OR put the function myDisplay() inside the myCalculator()

function myCalculator(num1, num2) {
    let sum = num1 + num2;
    myDisplayer(sum);
  }
  
  myCalculator(5, 5);

// The problem with the first example above, is that you have to call two functions to display the result.
// The problem with the second example, is that you cannot prevent the calculator function from displaying the result.
// Now it is time to bring in a callback.

/* ---------------------------- Callback ---------------------------- */ 

// A callback is a function passed as an argument to another function.
// Using a callback, you could call the calculator function (myCalculator) with a callback (myCallback),
// and let the calculator function run the callback after the calculation is finished:
function myDisplayer(some) {
  document.getElementById("demo").innerHTML = some;
}

function myCalculator(num1, num2, myCallback) {
  let sum = num1 + num2;
  myCallback(sum);
}

myCalculator(5, 5, myDisplayer);

// In the example above, myDisplayer is a called a callback function.
// It is passed to myCalculator() as an argument.
// When you pass a function as an argument, remember not to use parenthesis

// Example
// Create an Array
const myNumbers = [4, 1, -20, -7, 5, 9, -6];

// Call removeNegatives with a callback
const positiveNumbers = removeNegatives(myNumbers, (x) => x >= 0);

// Display Result
document.getElementById("demo").innerHTML = positiveNumbers;

// Keep only positive numbers
function removeNegatives(numbers, callback) {
  const myArray = [];
  for (const x of numbers) {
    if (callback(x)) {
      myArray.push(x);
    }
  }
  return myArray;
}

// In the example above, (x) => x >= 0 is a callback function.
// It is passed to removeNegatives() as an argument.