// String

// JavaScript strings are for storing and manipulating text.
// A JavaScript string is zero or more characters written inside quotes.

let text = "John Doe";

//You can use single or double quotes:
let stringWithDoubleQuote = "John Doe";  // Double quotes
let stringWithSingleQuote = 'John Doe';  // Single quotes

// You can use quotes inside a string, as long as they don't match the quotes surrounding the string:
let example1 = "It's alright";
let example2 = "He is called 'Johnny'";
let example3 = 'He is called "Johnny"';

// Escape Character
// The backslash (\) escape character turns special characters into string characters:
//  \'	'	Single quote
//  \"	"	Double quote
//  \\	\	Backslash
//  The sequence \"  inserts a double quote in a string:
let backlashExample1 = "We are the so-called \"Vikings\" from the north.";
let backlashExample2 = 'It\'s alright.';
let backlashExample3 = "The character \\ is called backslash.";

// Six other escape sequences are valid in JavaScript:
//  \b	Backspace
//  \f	Form Feed
//  \n	New Line
//  \r	Carriage Return
//  \t	Horizontal Tabulator
//  \v	Vertical Tabulator

// String As Object
let normalString = "John";
let objectString = new String("John");

// (x1 == y1) true
let x1 = new String("John");
let y1 = new String("John");

// (x2 === y2) false
let x2 = new String("John");
let y2 = new String("John");
