// Array Sorting

// String

// sort() method sorts an array alphabetically:
const fruits1 = ["Banana", "Orange", "Apple", "Mango"];
fruits1.sort(); // Apple,Banana,Mango,Orange

// reverse() method reverses the elements in an array.
// You can use it to sort an array in descending order:
const fruits2 = ["Banana", "Orange", "Apple", "Mango"];
fruits2.sort();     // Apple,Banana,Mango,Orange
fruits2.reverse();  // Orange,Mango,Banana,Apple

// Numeric

// By default, the sort() function sorts values as strings.
// However, if numbers are sorted as strings, "25" is bigger than "100", because "2" is bigger than "1".
// Because of this, the sort() method will produce incorrect result when sorting numbers.
// You can fix this by providing a compare function
// Ascending
const pointsAscending = [40, 100, 1, 5, 25, 10];
pointsAscending.sort(function(a, b){return a - b}); // 1,5,10,25,40,100
// Descending
const pointsDescending = [40, 100, 1, 5, 25, 10];
pointsDescending.sort(function(a, b){return b - a}); // 100,40,25,10,5,1

// The Compare Function
// The purpose of the compare function is to define an alternative sort order.
// The compare function should return a negative, zero, or positive value, depending on the arguments:
// function(a, b){return a - b}

// Sorting an Array in Random Order
const pointsRandom = [40, 100, 1, 5, 25, 10];
pointsRandom.sort(function(){return 0.5 - Math.random()}); // 5,100,1,40,25,10

// Find the Highest (or Lowest) Array Value
// There are no built-in functions for finding the max or min value in an array.
// However, after you have sorted an array, you can use the index to obtain the highest and lowest values.
const points = [40, 100, 1, 5, 25, 10];
points.sort(function(a, b){return a - b});
points[0] // contains the lowest value
points[points.length-1] // contains the highest value

// Math.max() on an Array
// You can use Math.max.apply to find the highest number in an array:
function myArrayMax(arr) {
  return Math.max.apply(null, arr);
}

const pointsMax = [40, 100, 1, 5, 25, 10];
myArrayMax(pointsMax) // 100

// Math.min() on an Array
// You can use Math.min.apply to find the lowest number in an array:
function myArrayMin(arr) {
  return Math.min.apply(null, arr);
}

const pointsMin = [40, 100, 1, 5, 25, 10];
myArrayMin(pointsMin) // 1

// Sorting Object Arrays

const cars = [
  {type:"Volvo", year:2016},
  {type:"Saab", year:2001},
  {type:"BMW", year:2010}
];

// The solution is to write a compare function to compare the property values:
cars.sort(function(a, b){return a.year - b.year}); /*
Saab 2001
BMW 2010
Volvo 2016 */