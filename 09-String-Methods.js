// String Methods


// String length - The length property returns the length of a string:
let textForLenght = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
let length = textForLenght.length; //26

//Extracting String Parts
//  There are 3 methods for extracting a part of a string:
    // slice(start, end)
    // substring(start, end)
    // substr(start, length)

// String slice() - extracts a part of a string and returns the extracted part in a new string.
// JavaScript counts positions from zero. First position is 0. Second position is 1.
let textForSlice = "Apple, Banana, Kiwi";
let partOfSlice = textForSlice.slice(7, 13); // Banana
let  withoutTheFirstElement = textForSlice(1); // Banana, Kiwi;

// String substring() - is similar to slice(). The difference is that start and end values less than 0 are treated as 0 in substring()
let strForSubstring = "Apple, Banana, Kiwi";
let partForSubstring = strForSubstring.substring(7, 13); // Banana

// String substr() - substr() is similar to slice(). The difference is that the second parameter specifies the length of the extracted part.
let strForSubstr = "Apple, Banana, Kiwi";
let partOfSubstr = strForSubstr.substr(7, 6); // Banana

// String replace() - The replace() method replaces a specified value with another value in a string and is case sensitive.
let textForReplace = "Please visit Microsoft!";
let newTextOfReplace = textForReplace.replace("Microsoft", "Nasa"); // Please visit Nasa!

// String replaceAll() - The replaceAll() method allows you to specify a regular expression instead of a string to be replaced
text = text.replaceAll("Cats","Dogs");
text = text.replaceAll("cats","dogs");
//OR
text = text.replaceAll(/Cats/g,"Dogs");
text = text.replaceAll(/cats/g,"dogs");

// String toUpperCase() - A string is converted to upper case with toUpperCase()
let text1 = "Hello World!";
let text2 = text1.toUpperCase(); // HELLO WORLD!

// String toLowerCase() - A string is converted to lower case with toLowerCase()
let text3 = "Hello World!";       // 
let text4 = text3.toLowerCase();  // hello world!

// String concat() - concat() joins two or more strings
let text5 = "Hello";
let text6 = "World";
let text7 = text5.concat(" ", text6); // Hello World
// The concat() method can be used instead of the plus operator. These two lines do the same:
text = "Hello" + " " + "World!";
text = "Hello".concat(" ", "World!");  // Hello World!

// String trim() - The trim() method removes whitespace from both sides of a string
let text8 = "      Hello World!      ";
let text9 = text8.trim();   // Hello World!

// String trimStart() - The trimStart() method works like trim(), but removes whitespace only from the start of a string
let text10 = "     Hello World!     ";
let text11 = text10.trimStart(); // "Hello World!     "

// String trimEnd() - The trimEnd() method works like trim(), but removes whitespace only from the end of a string.
let text12 = "     Hello World!     ";
let text13 = text12.trimEnd(); // "Hello World!     "

// String padStart() - The padStart() method pads a string with another string
let text14 = "5";
let paddedText14 = text14.padStart(4,"x"); // xxx5
// OR
let text15 = "5";
let paddedText15 = text14.padStart(4,"0"); // 0005

// String padEnd() - The padEnd() method pads a string with another string
let text16 = "5";
let paddedText16 = text16.padEnd(4,"x"); // 5xxx
// OR
let text17 = "5";
let paddedText17 = text17.padEnd(4,"0"); // 5000

// String charAt() - The charAt() method returns the character at a specified index (position) in a string
let text18 = "HELLO WORLD";
let charForText18 = text18.charAt(0); // H

// String charCodeAt() - The charCodeAt() method returns the unicode of the character at a specified index in a string
let text19 = "HELLO WORLD";
let charForText19 = text19.charCodeAt(0); // 72 (that is the unicode for the letter H)

// Property Access - ECMAScript 5 (2009) allows property access [ ] on strings:
let text20 = "HELLO WORLD";
let charForText20 = text20[0]; // H
// It is read only. str[0] = "A" gives no error (but does not work!)
let text21 = "HELLO WORLD";
text21[0] = "A";    // Gives no error, but does not work

// String split() -- A string can be converted to an array with the split() method
text.split(",")    // Split on commas
text.split(" ")    // Split on spaces
text.split("|")    // Split on pipe
text.split("")     // Returns an string Array in index [0]