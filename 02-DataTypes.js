// Data Types

// Different types of values and data can be stored in JavaScript variables.
// To assign values to JavaScript variables, you use the equals to "=" sign operator.
// The various data types in JavaScript are as follows:

// ----------------------------------------------

// Primitive Types

// Variables - does not have a fixed value.
var y

// Constant numbers - these data types have a fixed value.
const g = 9.8

// Numbers - They can be real numbers or integers.
const numeber = 100
const numberByConstructor = new Number(1);

// Text - Strings - are a combination of multiple characters.
const demoString = "Hello World"
const stringByConstructor = new String('string');

// Operations - can also be assigned to JavaScript variables.
const sum = 20 + 30 + 29

// Boolean values - can be "true" or "false".
const booleanValueTrue = true
const booleanValueFalse = false
const booleanByConstructor = new Boolean(true);

// Null
const nullValue = null;

// Undefined
const undefinedValue = undefined;

// ----------------------------------------------

// Non-Primitive Types

// Arrays - They are a method of categorising variables and attributes. Arrays can be defined as a collection of objects of the same type.
const array = [1, 2, 3];
const arrayByConstructor = new Array(1, 2, 3);

// Objects - containers for named values called properties. They possess their own data members and methods.
var name = {name:"Jon Snow", id:"AS123"}

// Map
const mapByConstructor = new Map();
// Set
const setByConstructor = new Set();

// Function
const functionValue = function () {
    return 1;
};
const functionByConstructor = new Function('return 1');

// Regexp
const regexp = /a/;
const regexpByConstructor = new RegExp('a');

// Promise
const promiseByConstructor = new Promise();

// Date
const dateByConstructor = new Date();

// Error
const errorByConstructor = new Error('error');