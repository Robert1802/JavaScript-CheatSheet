// Math

// The JavaScript Math object allows you to perform mathematical tasks on numbers.
// Unlike other objects, the Math object has no constructor.
// The Math object is static.
// All methods and properties can be used without creating a Math object first.

// Math Methods
// The syntax for Math any methods is : Math.method(number)

// Math Properties (Constants)
// The syntax for any Math property is : Math.property.
Math.E        // returns Euler's number
Math.PI       // returns PI
Math.SQRT2    // returns the square root of 2
Math.SQRT1_2  // returns the square root of 1/2
Math.LN2      // returns the natural logarithm of 2
Math.LN10     // returns the natural logarithm of 10
Math.LOG2E    // returns base 2 logarithm of E
Math.LOG10E   // returns base 10 logarithm of E

// Number to Integer
// There are 4 common methods to round a number to an integer:
Math.round(x)	// Returns x rounded to its nearest integer
Math.ceil(x)	// Returns x rounded up to its nearest integer
Math.floor(x)	// Returns x rounded down to its nearest integer
Math.trunc(x)	// Returns the integer part of x (new in ES6)

// Other operations
Math.sign(x)    // Returns if x is negative, null or positive
Math.pow(x, y)  // Returns the value of x to the power of y
Math.sqrt(x)    // Returns the square root of x
Math.abs(x)     // Returns the absolute (positive) value of x

// Trigonometry
// If you want to use degrees instead of radians, you have to convert degrees to radians:
// Angle in radians = Angle in degrees x PI / 180.

// Math.sin(x) returns the sine (a value between -1 and 1) of the angle x (given in radians).
Math.sin(90 * Math.PI / 180);     // returns 1 (the sine of 90 degrees)

// Math.cos(x) returns the cosine (a value between -1 and 1) of the angle x (given in radians).
Math.cos(0 * Math.PI / 180);     // returns 1 (the cos of 0 degrees)

// Math.min() Can be used to find the lowestvalue in a list of arguments
Math.min(0, 150, 30, 20, -8, -200); // -200
// Math.max() Can be used to find the highest value in a list of arguments:
Math.max(0, 150, 30, 20, -8, -200); // 150
// Math.random Returns a random number between 0 (inclusive), and 1 (exclusive)
Math.random()   // ex: 0.2826863183637298

// Math.log(x) returns the natural logarithm of x.
// The natural logarithm returns the time needed to reach a certain level of growth:
Math.log(1);
Math.log(2);
Math.log(3);
Math.log(10); // Same as Math.E

// Math.log2(x) returns the base 2 logarithm of x.
// How many times must we multiply 2 to get 8?
Math.log2(8);

// Math.log10(x) returns the base 10 logarithm of x.
// How many times must we multiply 10 to get 1000?
Math.log10(1000);

// -------------------------------- Summary
// JavaScript Math Methods
abs(x)	        // Returns the absolute value of x
acos(x)	        // Returns the arccosine of x, in radians
acosh(x)	    // Returns the hyperbolic arccosine of x
asin(x)	        // Returns the arcsine of x, in radians
asinh(x)	    // Returns the hyperbolic arcsine of x
atan(x)	        // Returns the arctangent of x as a numeric value between -PI/2 and PI/2 radians
atan2(y,x)      // Returns the arctangent of the quotient of its arguments
atanh(x)	    // Returns the hyperbolic arctangent of x
cbrt(x)	        // Returns the cubic root of x
ceil(x)	        // Returns x, rounded upwards to the nearest integer
cos(x)	        // Returns the cosine of x (x is in radians)
cosh(x)	        // Returns the hyperbolic cosine of x
exp(x)	        // Returns the value of Ex
floor(x)	    // Returns x, rounded downwards to the nearest integer
log(x)	        // Returns the natural logarithm (base E) of x
max(x, y, z, n)	// Returns the number with the highest value
min(x, y, z, n)	// Returns the number with the lowest value
pow(x, y)	    // Returns the value of x to the power of y
random()	    // Returns a random number between 0 and 1
round(x)	    // Rounds x to the nearest integer
sign(x)	        // Returns if x is negative, null or positive (-1, 0, 1)
sin(x)	        // Returns the sine of x (x is in radians)
sinh(x)	        // Returns the hyperbolic sine of x
sqrt(x)	        // Returns the square root of x
tan(x)	        // Returns the tangent of an angle
tanh(x)	        // Returns the hyperbolic tangent of a number
trunc(x)	    // Returns the integer part of a number (x)