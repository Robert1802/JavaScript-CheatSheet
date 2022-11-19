// Objects

// In JavaScript, almost "everything" is an object.
// JavaScript variables can also contain many values.
// Objects are variables too. But objects can contain many values.
// Object values are written as name : value pairs (name and value separated by a colon).
let person1 = {
    firstName:"John",
    lastName:"Doe",
    age:50,
    eyeColor:"blue",
    fullName: function() {return this.firstName + " " + this.lastName;}
};

// Using the JavaScript Keyword new
// The following example create a new JavaScript object using new Object(), and then adds 4 properties:
const person2 = new Object();
person2.firstName = "John";
person2.lastName = "Doe";
person2.age = 50;
person2.eyeColor = "blue";

// If person is an object, the following statement will not create a copy of person:
const x = person1;  // Will not create a copy of person1.
// The object x is not a copy of person. It is person.
x.age = 10;      // Will change both x.age and person1.age

// Accessing JavaScript Properties
objectName.property      // person.age
// OR
objectName["property"]   // person["age"]
// OR
objectName[expression]   // x = "age"; person[x]

// JavaScript for...in Loop
// The JavaScript for...in statement loops through the properties of an object.
// Syntax
for (let variable in object) {
  // code to be executed
}

// The block of code inside of the for...in loop will be executed once for each property.
// Looping through the properties of an object:
const person3 = {
  fname:" John",
  lname:" Doe",
  age: 25
};

for (let x in person3) {
  txt += person3[x];
}

// What is this?
// In JavaScript, the this keyword refers to an object.
// Which object depends on how this is being invoked (used or called).
// The this keyword refers to different objects depending on how it is used

const person4 = {
    firstName: "John",
    lastName: "Doe",
    id: 5566,
    fullName: function() {
      return this.firstName + " " + this.lastName;
    }
  };
