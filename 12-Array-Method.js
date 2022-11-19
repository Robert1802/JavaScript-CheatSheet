// Array Methods

// toStrings() - converts an array to a string of (comma separated) array values.
const fruits1 = ["Banana", "Orange", "Apple", "Mango"];
document.getElementById("demo").innerHTML = fruits1.toString();
// Result: Banana,Orange,Apple,Mango

// pop() - removes the last element from an array
const fruits2 = ["Banana", "Orange", "Apple", "Mango"];
let fruit2 = fruits2.pop();
// Result: Banana,Orange,Apple,Mango

// push() - adds a new element to an array (at the end)
const fruits3 = ["Banana", "Orange", "Apple", "Mango"];
fruits3push("Kiwi");
// Result: Banana,Orange,Apple,Mango,Kiwi

// shift() - removes the first array element and "shifts" all other elements to a lower index
const fruits4 = ["Banana", "Orange", "Apple", "Mango"];
fruits4.shift();
// Result: Orange,Apple,Mango

// unshift() - adds a new element to an array (at the beginning), and "unshifts" older elements
const fruits5 = ["Banana", "Orange", "Apple", "Mango"];
fruits5.unshift("Lemon");
// Result: Lemon,Banana,Orange,Apple,Mango,Kiwi

// Changing Elements
// Array elements are accessed using their index number:
// Array indexes start with 0:

Arr[0] // is the first array element
Arr[1] // is the second
Arr[2] // is the third ...

// Example
const fruits6 = ["Banana", "Orange", "Apple", "Mango"];
fruits6[0] = "Kiwi";
// Result: Kiwi,Orange,Apple,Mango

// length() - provides an easy way to append a new element to an array:
// Example
const fruits7 = ["Banana", "Orange", "Apple", "Mango"];
fruits7[fruits7.length] = "Kiwi";
// Result: Banana,Orange,Apple,Mango,Kiwi

// delete() - deletes an element in the array and leaves undefined holes in the array (use pop() instead)
const fruits8 = ["Banana", "Orange", "Apple", "Mango"];
delete fruits8[0];
// Result: undefined,Orange,Apple,Mango,Mango

// Merging (Concatenating) Arrays
// The concat() method creates a new array by merging (concatenating) existing arrays:
const myGirls = ["Cecilie", "Lone"];
const myBoys = ["Emil", "Tobias", "Linus"];

const myChildren = myGirls.concat(myBoys); // Cecilie,Lone,Emil,Tobias,Linus

// Merging Three Arrays
const arr1 = ["Cecilie", "Lone"];
const arr2 = ["Emil", "Tobias", "Linus"];
const arr3 = ["Robin", "Morgan"];
const arr4 = arr1.concat(arr2, arr3); // Cecilie,Lone,Emil,Tobias,Linus,Robin,Morgan

// splice() - method adds new items to an array
const fruits9 = ["Banana", "Orange", "Apple", "Mango"];
fruits9.splice(2, 0, "Lemon", "Kiwi")
// Before:  Banana,Orange,Apple,Mango
// After:   Banana,Orange,Lemon,Kiwi,Apple,Mango
// The first parameter (2) defines the position where new elements should be added (spliced in).
// The second parameter (0) defines how many elements should be removed.
// The rest of the parameters ("Lemon" , "Kiwi") define the new elements to be added.

// using splice() to Remove Elements
const fruits10 = ["Banana", "Orange", "Apple", "Mango"];
fruits10.splice(0, 1); // Orange,Apple,Mango
// The first parameter (0) defines the position where new elements should be added (spliced in).
// The second parameter (1) defines how many elements should be removed.
// The rest of the parameters are omitted. No new elements will be added.

// slice() - method slices out a piece of an array into a new array.
const fruits11 = ["Banana", "Orange", "Lemon", "Apple", "Mango"];
const citrus1 = fruits11.slice(1); // Orange,Lemon,Apple,Mango
const fruits12 = ["Banana", "Orange", "Lemon", "Apple", "Mango"];
const citrus2 = fruits12.slice(3); // Apple,Mango
const fruits13 = ["Banana", "Orange", "Lemon", "Apple", "Mango"];
const citrus4 = fruits13.slice(1, 3); // Orange,Lemon
const fruits14 = ["Banana", "Orange", "Lemon", "Apple", "Mango"];
const citrus5 = fruits14.slice(2); // Lemon,Apple,Mango


/* ---------------- SUMMARY ---------------- */

pop()   // This method is used for removing the last element of an array.
push()  // This method is used for adding a new element at the very end of an array.
concat()    // This method is used for joining various arrays into a single array.
reverse()   // This method is used for reversing the order of the elements in an array.
shift() // This method is used for removing the first element of an array.
slice() // This method is used for pulling a copy of a part of an array into a new array.
splice()    // This method is used for adding elements in a particular way and position.
toString()  // This method is used for converting the array elements into strings.
unshift()   // This method is used for adding new elements at the beginning of the array.
valueOf()   // This method is used for returning the primitive value of the given object.
indexOf()   // This method is used for returning the first index at which a given element is found in an array.
lastIndexOf()   // This method is used for returning the final index at which a given element appears in an array.
join()  // This method is used for combining elements of an array into one single string and then returning it.
sort()  // This method is used for sorting the array elements based on some condition.