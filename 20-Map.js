// Map
// A Map holds key-value pairs where the keys can be any datatype.
// A Map remembers the original insertion order of the keys.

// Map Methods
// Method	Description
    // new Map()	Creates a new Map
    // set()	    Sets the value for a key in a Map
    // get()	    Gets the value for a key in a Map
    // delete()	    Removes a Map element specified by the key
    // has()	    Returns true if a key exists in a Map
    // forEach()	Calls a function for each key/value pair in a Map
    // entries()	Returns an iterator with the [key, value] pairs in a Map
// Property	Description
    // size	        Returns the number of elements in a Map

// Create a Map
const fruits = new Map([
    ["apples", 500],
    ["bananas", 300],
    ["oranges", 200]
  ]);

// Create a Map
  const fruitsMap = new Map();

// set() Method - You can add elements to a Map with the set() method:
fruitsMap.set("apples", 500);
fruitsMap.set("bananas", 300);
fruitsMap.set("oranges", 200);

// get() Method - gets the value of a key in a Map:
fruitsMap.get("apples");    // Returns 500

// size Property - returns the number of elements in a Map:
fruits.size;    // 3

// delete() Method - removes a Map element:
fruits.delete("apples"); // Deletes the "apples" key pair from the Map

// has() Method - returns true if a key exists in a Map:
fruits.has("apples"); // false - because we deleted "apples" on the previous example

// forEach() Method - calls a function for each key/value pair in a Map:
// List all entries
fruits.forEach (function(value, key) {
    alert(key + ' = ' + value); // apples = 500 // bananas = 300 // oranges = 200
})

// entries() Method - returns an iterator object with the [key, values] in a Map:
// List all entries
for (const x of fruits.entries()) {
  alert(x); // apples,500 // bananas,300 // oranges,200
}