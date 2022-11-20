// Asynchronous

// Functions running in parallel with other functions are called asynchronous
// In the real world, callbacks are most often used with asynchronous functions.
// A good example is JavaScript setTimeout()

/* Waiting for a Timeout */
// When using the JavaScript function setTimeout(), you can specify a callback function to be executed on time-out:

setTimeout(myFunction, 3000);

function myFunction() {
  alert("This function will be executed after the TimeOut ends!!");
}

// In the example above, myFunction is used as a callback.
// myFunction is passed to setTimeout() as an argument.
// 3000 is the number of milliseconds before time-out, so myFunction() will be called after 3 seconds.

// Instead of passing the name of a function as an argument to another function, you can always pass a whole function instead:
setTimeout(function() { myFunction("This function will be executed after the TimeOut ends!!"); }, 3000);

function myFunction(value) {
  alert(value);
}

/* Waiting for Intervals */
// When using the JavaScript function setInterval(), you can specify a callback function to be executed for each interval:
setInterval(myFunction, 1000);

function myFunction() {
  let d = new Date();
  alert( d.getHours() + ":" + d.getMinutes() + ":" + d.getSeconds());
}

// In the example above, myFunction is used as a callback.
// myFunction is passed to setInterval() as an argument.
// 1000 is the number of milliseconds between intervals, so myFunction() will be called every second.

// With asynchronous programming, JavaScript programs can start long-running tasks, and continue running other tasks in parallell.
// But, asynchronus programmes are difficult to write and difficult to debug.
// Because of this, most modern asynchronous JavaScript methods don't use callbacks.
// Instead, in JavaScript, asynchronous programming is solved using Promises instead
