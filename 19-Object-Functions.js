// Functions

// Object Native Functions
const obj = {
    name: 'Lee',
    age: 29
}

// This method returns an array of a given object's own enumerable string-keyed property [key, value] pairs
Object.entries(obj);

// This method returns an array of a given object's own enumerable property names
Object.keys(obj);

// This method returns an array of a given object's own enumerable property values
Object.values(obj);

// This method copies all enumerable own properties from one or more source objects to a target object
// This method dont change the original object
Object.assign({}, obj);

// This method freezes an object, that is, prevents new properties from being added to it and
//prevents existing properties from being removed or modified
Object.freeze(obj);

// This method determines if an object is frozen
Object.isFrozen(obj);

// This method seals an object, preventing new properties 
// from being added to it and marking all existing properties as non-configurable
Object.seal(obj);

// This method determines if an object is sealed
Object.isSealed(obj);

// Comparing Objects
// Trick to compare objects or arrays
const obj1 = { a: 1, b: 2, c: 3 };
const obj2 = { a: 1, b: 2, c: 3 };

// Compare with JSON.stringify
JSON.stringify(obj1) === JSON.stringify(obj2);