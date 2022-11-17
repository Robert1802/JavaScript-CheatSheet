// Loops

// Loops can execute a block of code a number of times.
// Loops are handy, if you want to run the same code over and over again, each time with a different value.

// Different Kinds of Loops:
//      for - loops through a block of code a number of times
//      while - loops through a block of code while a specified condition is true
//      do/while - also loops through a block of code while a specified condition is true
//      for/in - loops through the properties of an object
//      for/of - loops through the values of an iterable object

//--------------------------------------------------------------------------------------------

// The for loop
// The most frequent method of creating a loop in JavaScript. Its syntax is shown below:
for (initializationOfTheLoopVariable; conditionCheckingForTheLoop; updationAfterTheLoop) {
   // code to be executed in loop
}

//Example
for (let i = 0; i < 5; i++) {
    text += "The number is " + i + "<br>";
}

//--------------------------------------------------------------------------------------------

// The while loop
// Establishes the conditions under which a loop will run. Its syntax is shown below:
// Initialization of the loop variable is done before the while loop begins
while(conditionCheckingForTheLoop){
  // 1. code to be executed in loop
  // 2. updation of the loop variable
}

//Example
while (i < 10) {
    text += "The number is " + i;
    i++;
 }

//--------------------------------------------------------------------------------------------

// The do-while loop: Similar to the while loop, but it runs at least once and checks at the end to see whether the condition is met to run again. Its syntax is shown below:
// Initialization of the loop variable is done before the do-while loop begins
do{
  // 1. code to be executed in loop
  // 2. updation of the loop variable
}while(conditionCheckingForTheLoop);

// Example
do {
  text += "The number is " + i;
  i++;
}
while (i < 10);

//--------------------------------------------------------------------------------------------

// The For In Loop
// The JavaScript for in statement loops through the properties of an Object:

for (key in object) {
  // code block to be executed
}

// Example
const person = {fname:"John", lname:"Doe", age:25};

let text = "";
for (let x in person) {
  text += person[x];
}
// Prints John Doe 25

// For In Over Arrays
// The JavaScript for in statement can also loop over the properties of an Array:

for (variable in array) {
  code
}

//Example
const arrayOfNumbers = [45, 4, 9, 16, 25];

let textToBePrinted = "";
for (let elementOnTheArray in arrayOfNumbers) {
  textToBePrinted += arrayOfNumbers[elementOnTheArray] + " ";
}
// Prints: 45 4 9 16 25

//--------------------------------------------------------------------------------------------

//There are two statements that are important in the context of loops:
//  continue: Skip parts of the loop if certain conditions are met.
//  break: Used to stop and exit the cycle when specific conditions are met