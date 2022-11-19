// Arrays1
// An array is a special variable, which can hold more than one value:
const array_name = [item1, item2, "..."];  

// You can also create an array, and then provide the elements:
const cars = [];
cars[0] = "Saab";
cars[1] = "Volvo";
cars[2] = "BMW";

// Create Array as an Object using new
const cars2 = new Array("Saab", "Volvo", "BMW");

// Accessing Array Elements
// You access an array element by referring to the index number
const cars = ["Saab", "Volvo", "BMW"];
let car = cars[0]; // Saab

// Changing an Array Element
// This statement changes the value of the first element in cars:
const cars = ["Saab", "Volvo", "BMW"];
cars[0] = "Opel"; // Opel,Volvo,BMW

// Access the Full Array
// With JavaScript, the full array can be accessed by referring to the array name:
const cars = ["Saab", "Volvo", "BMW"];
document.getElementById("demo").innerHTML = cars;

// Arrays are Objects
// Arrays are a special type of objects. The typeof operator in JavaScript returns "object" for arrays.
// Arrays use numbers to access its "elements". In this example, person[0] returns John:
Array:
const personAsArray = ["John", "Doe", 46];
//Objects use names to access its "members". In this example, person.firstName returns John:
Object:
const personAsObject = {firstName:"John", lastName:"Doe", age:46};

// Array Elements Can Be Objects
// JavaScript variables can be objects. Arrays are special kinds of objects.
// Because of this, you can have variables of different types in the same Array.
// You can have objects in an Array. You can have functions in an Array. You can have arrays in an Array:
myArray[0] = Date.now;
myArray[1] = myFunction;
myArray[2] = myCars;

// Accessing the First Array Element
const fruitsFirstElement = ["Banana", "Orange", "Apple", "Mango"];
let fruitFirstElement = fruitsFirstElement[0]; // Banana

// Accessing the Last Array Element
const fruitsLastElement = ["Banana", "Orange", "Apple", "Mango"];
let fruitLastElement = fruitsLastElement[fruitsLastElement.length - 1];

/// Looping Array Elements
// For loop:
const fruitsForLoop = ["Banana", "Orange", "Apple", "Mango"];
let fruitsLen = fruitsForLoop.length;
for (let i = 0; i < fruitsLen; i++) {
  alert(fruitsForLoop[i]);
}

// You can also use the Array.forEach() function:
const fruitsForEachLoop = ["Banana", "Orange", "Apple", "Mango"];
fruitsForEachLoop.forEach(myFunction);
function myFunction(value) {
  alert(value);
}

// Adding Array Elements
// The easiest way to add a new element to an array is using the push() method:
const fruits = ["Banana", "Orange", "Apple"];
fruits.push("Lemon");  // Adds a new element (Lemon) to fruits
// OR
fruits[fruits.length] = "Lemon";  // Adds "Lemon" to fruits, but can create undefined holes in the Array

// JavaScript new Array()
// JavaScript has a built-in array constructor new Array().
// But you can safely use [] instead.

// These two different statements both create a new empty array named points:
const exampleArray1 = new Array();
const exampleArray2 = [];
// These two different statements both create a new array containing 6 numbers:
const exampleArray3 = new Array(40, 100, 1, 5, 25, 10);
const exampleArray4 = [40, 100, 1, 5, 25, 10];