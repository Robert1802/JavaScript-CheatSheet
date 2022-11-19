// Set
// A JavaScript Set is a collection of unique values.
// Each value can only occur once in a Set.

// Set Methods
//   Method	    Description
  // new Set()	Creates a new Set
  // add()	    Adds a new element to the Set
  // delete()	  Removes an element from a Set
  // has()	    Returns true if a value exists in the Set
  // forEach()	Invokes a callback for each element in the Set
  // values()	  Returns an iterator with all the values in a Set
//   Property	  Description
  // size	      Returns the number of elements in a Set

// Create a Set
// You can create a JavaScript Set by:
//   Passing an Array to new Set()
//   Create a new Set and use add() to add values
//   Create a new Set and use add() to add variables7

//  new Set() Method - Pass an Array to the new Set() constructor:

  // Create a Set Filled
  const lettersFIlled = new Set(["a","b","c"]);
  // OR
  // Create a Set Empty
  const letters = new Set();

  // Add Values to the Set
  letters.add("a");
  letters.add("b");
  letters.add("c");

// Create a Set and add variables:

  // Create a Set
  const lettersWithVariables = new Set();

  // Create Variables
  const a = "a";
  const b = "b";
  const c = "c";

  // Add Variables to the Set
  lettersWithVariables.add(a);
  lettersWithVariables.add(b);
  lettersWithVariables.add(c);

  // add() Method - If you add equal elements, only the first will be saved
  letters.add("d");
  letters.add("e");
  letters.add("e");
  letters.add("e");

// forEach() Method - invokes (calls) a function for each Set element:

  // Create a Set
  const lettersToIterate = new Set(["a","b","c"]);

  // List all Elements
  lettersToIterate.forEach (function(value) {
    alert(value);
  })

// values() Method - returns a new iterator object containing all the values in a Set:
letters.values()   // Returns [object Set Iterator]