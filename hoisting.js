console.log(x); // undefined (due to hoisting)
var x = 5;

// Hoisting also works for function declarations
sayHello(); // "Hello"
function sayHello() {
    console.log("Hello");
}
