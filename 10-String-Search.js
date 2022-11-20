// String Search Methods

// String indexOf()
// The indexOf() method returns the index of (position of) the first occurrence of a string in a string
let str1 = "Please locate where 'locate' occurs!";
str1.indexOf("locate"); // 7 (because it starts on the 7th position)

// String lastIndexOf()
// The lastIndexOf() method returns the index of the last occurrence of a specified text in a string
let text1 = "Please locate where 'locate' occurs!";
text1.lastIndexOf("locate"); // 21  (because the last 'location' is found on the 21th position)
// Returns -1 if it does not find the specified word
let text2 = "Please locate where 'locate' occurs!";
text2.lastIndexOf("John"); // -1
// Both methods accept a second parameter as the starting position for the search
let text3 = "Please locate where 'locate' occurs!";
text3.indexOf("locate", 15); // 21 (because it starts counting after the 15th character but returns the absolute position)

// String search()
// The search() method searches a string for a string (or a regular expression) and returns the position of the match
let str2 = "Please locate where 'locate' occurs!";
str2.search("locate"); // 7
let str3 = "Please locate where 'locate' occurs!";
str3.search(/locate/); // 7

// The two methods [indexOf() and search()] are NOT equal. These are the differences:
// The search() method cannot take a second start position argument.
// The indexOf() method cannot take powerful search values (regular expressions).

// String match()
// The match() method returns an array containing the results of matching a string against a string (or a regular expression)
let text4 = "The rain in SPAIN stays mainly in the plain";
text4.match("ain");      // 1 ain             (lenght, array)
text4.match(/ain/);      // 3 ain,ain,ain     (lenght, array)
text4.match(/ain/g);     // 4 ain,AIN,ain,ain (lenght, array)
text4.match(/ain/gi);    // 1 ain             (lenght, array)

// String matchAll()
// The matchAll() method returns an iterator containing the results of matching a string against a string (or a regular expression)
let text5 = "I love cats. Cats are very easy to love. Cats are very popular."
const iterator = text5.matchAll("Cats"); // Cats,Cats

// String includes()
// The includes() method returns true if a string contains a specified value.
let text6 = "Hello world, welcome to the universe.";
text6.includes("world"); // Check if a string includes "world": true
// OR
text6.includes("world", 12); // Check if a string includes "world" starting from position 12: false

// String startsWith() - The startsWith() method returns true if a string begins with a specified value
let text7 = "Hello world, welcome to the universe.";
text7.startsWith("Hello");       // true
text7.startsWith("world");       // false 
text7.startsWith("world", 5);    // false
text7.startsWith("world", 6);    // true

// String endsWith()
// The endsWith() method returns true if a string ends with a specified value.
let text8 = "John Doe";
text8.endsWith("Doe"); // true
// OR
let text9 = "Hello world, welcome to the universe.";
text9.endsWith("world", 11); // true