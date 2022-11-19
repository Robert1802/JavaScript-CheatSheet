// Array Iteration

// For Loop
// Iterate through the Array using a For loop
const numbersForLoop = [45, 4, 9, 16, 25];
for (let i = 0; i < numbersForLoop.length; i++) {
    const element = numbersForLoop[i];
    
}

// Array forEach()
// Calls a function (a callback function) once for each array element.

numbers.forEach(myFunction);
function myFunction(value, index, array) {
  alert(value)
}

//Note that the function takes 3 arguments:
//  The item value
//  The item index
//  The array itself

const numbers = [45, 4, 9, 16, 25];
numbers.forEach(myFunction);
function myFunction(value) {
  alert(value) // 45 // 4 // 9 // 16 // 25
}

// Array map()
// The map() method creates a new array by performing a function on each array element.
// The map() method does not execute the function for array elements without values.
// The map() method does not change the original array.

const numbersBeforeMap = [45, 4, 9, 16, 25];
const numbersMapped = numbersBeforeMap.map(myFunction); // 90,8,18,32,50

function myFunction(value, index, array) {
  return value * 2;
}

// Array filter()
// The filter() method creates a new array with array elements that pass a test.

const numbersFiltered = [45, 4, 9, 16, 25];
const over18 = numbersFiltered.filter(myFunction); // 45,25

function myFunction(value, index, array) {
    return value > 18;
  }

// Array reduce()
// The reduce() method runs a function on each array element to produce (reduce it to) a single value.
// The reduce() method works from left-to-right in the array. See also reduceRight().
// The reduce() method does not reduce the original array.

const numbersToSum = [45, 4, 9, 16, 25];
let sum1 = numbersToSum.reduce(myFunction); // 99
let sum2 = numbers.reduce(myFunction, 100); // 99 + 100 array.filter can accept an initial value

function myFunction(total, value, index, array) {
  return total + value;
}

// Array reduceRight()
// The reduceRight() method runs a function on each array element to produce (reduce it to) a single value.
// The reduceRight() works from right-to-left in the array. See also reduce().
// The reduceRight() method does not reduce the original array.

const numbersToSumFromRight = [45, 4, 9, 16, 25];
let sum = numbersToSumFromRight.reduceRight(myFunction); // 99 sum from the right to the left

function myFunction(total, value, index, array) {
  return total + value;
}

// Array every()
// The every() method checks if all array values pass a test.
// This example checks if all array values are larger than 18:

const numbersToCheckCondition = [45, 4, 9, 16, 25];
let allOver18 = numbersToCheckCondition.every(myFunction); // False - not all values check the condition

function myFunction(value, index, array) {
  return value > 18;
}

// Array some()
// The some() method checks if some array values pass a test.
// This example checks if some array values are larger than 18:

const numbersToCheckIfAny = [45, 4, 9, 16, 25];
let someOver18 = numbersToCheckIfAny.some(myFunction); // True - there is at least 1 value that match the condition

function myFunction(value, index, array) {
  return value > 18;
}

// Array indexOf()
// The indexOf() method searches an array for an element value and returns its position.
// Note: The first item has position 0, the second item has position 1, and so on.

const fruitsToCheckFirstIndex = ["Apple", "Orange", "Apple", "Mango"];
let firstPosition = fruitsToCheckFirstIndex.indexOf("Apple"); // 0 - is the first position that "Apple" appears

// Array lastIndexOf()
// Array.lastIndexOf() is the same as Array.indexOf(), but returns the position of the last occurrence of the specified element.

const fruitsToCheckLastIndex = ["Apple", "Orange", "Apple", "Mango"];
let lastPosition = fruitsToCheckLastIndex.lastIndexOf("Apple"); // 2 - is the first position that "Apple" appears counting from the right to the left

// Array find()
// The find() method returns the value of the first array element that passes a test function.
// This example finds (returns the value of) the first element that is larger than 18:

const numbersToCheck = [4, 9, 16, 25, 29];
let firstGreaterThen18 = numbers.find(myFunction); // 25 - 25 is the first number to check the condition true

function myFunction(value, index, array) {
  return value > 18;
}

// Array findIndex()
// The findIndex() method returns the index of the first array element that passes a test function.
// This example finds the index of the first element that is larger than 18:

const numbersToFindIndex = [4, 9, 16, 25, 29];
let first = numbersToFindIndex.findIndex(myFunction); // 3 - 25 is in the 3 index and is the first to check the condition right 

function myFunction(value, index, array) {
  return value > 18;
}

// Array.from()
// The Array.from() method returns an Array object from any object with a length property or any iterable object.
// Create an Array from a String:

Array.from("ABCDEFG"); // [ A, B, C, D, E, F, G]

// Array Keys()
// The Array.keys() method returns an Array Iterator object with the keys of an array.
// Create an Array Iterator object, containing the keys of the array:

const ToGetKeys = ["Banana", "Orange", "Apple", "Mango"];
const keys = ToGetKeys.keys();

for (let x of keys) {
  alert(x); // 0 // 1 // 2 // 3
}

// Array entries()
// Create an Array Iterator, and then iterate over the key/value pairs:

const ToCheckEntries = ["Banana", "Orange", "Apple", "Mango"];
const f = ToCheckEntries.entries(); 

for (let x of f) {
  alert(x); // 0,Banana // 1,Orange // 2,Apple // 3,Mango
}

// Array includes()
// ECMAScript 2016 introduced Array.includes() to arrays. This allows us to check if an element is present in an array (including NaN, unlike indexOf).
const fruitsToCheckIncludes = ["Banana", "Orange", "Apple", "Mango"];
fruitsToCheckIncludes.includes("Mango"); // true - there is a "Mango" on the Array
