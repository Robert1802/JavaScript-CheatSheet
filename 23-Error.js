// Error Handling
// Various types of errors occur when we are coding in JavaScript. There are a few options for dealing with them:

// try // We can define a code block for testing errors using the try block.
// catch // We can set up a block of code to execute in the event of an error using the catch statement. 
// throw // Instead of the typical JavaScript errors, we can also create custom error messages using the throw statement.
// finally // JavaScript also allows us to run our code regardless of the outcome of try and catch.

// try and catch
// The try statement allows you to define a block of code to be tested for errors while it is being executed.
// The catch statement allows you to define a block of code to be executed, if an error occurs in the try block.
// The JavaScript statements try and catch come in pairs:

try {
  // Block of code to try
}
catch(err) {
  // Block of code to handle errors
}

// Throws Errors
// When an error occurs, JavaScript will normally stop and generate an error message.
// The technical term for this is: JavaScript will throw an exception (throw an error).
// JavaScript will actually create an Error object with two properties: name and message.

// throw Statement
// The throw statement allows you to create a custom error.
// Technically you can throw an exception (throw an error).
// The exception can be a JavaScript String, a Number, a Boolean or an Object:

throw "Too big";    // throw a text
throw 500;          // throw a number

// HTML Validation
// The code above is just an example.
// Modern browsers will often use a combination of JavaScript and built-in HTML validation, using predefined validation rules defined in HTML attributes:

<input id="demo" type="number" min="5" max="10" step="1"></input>

// finally Statement
// The finally statement lets you execute code, after try and catch, regardless of the result:

try {
  // Block of code to try
}
catch(err) {
  // Block of code to handle errors
}
finally {
  // Block of code to be executed regardless of the try / catch result
}

// Error Object - possesses its own inbuilt error object which has the following properties:

    // name — It is used for setting or returning an error name.
    // message — It is used for setting or returning the error message as a string.

// Error Name Values - There are six types of ways in which the error property can return its name. They are as follows:

    EvalError // It indicates that an error has occurred within the eval() method.
    RangeError // It indicates that some number is “out of range”.
    ReferenceError //  It indicates that an illegal reference was occurring.
    SyntaxError //  It indicates that a syntax error was occurring.
    TypeError //  It indicates that a type error was occurring.
    URIError //  It indicates that an encodeURI() error was occurring.

