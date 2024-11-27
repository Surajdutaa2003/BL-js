function firstFunction() {
    console.log("First Function");
    secondFunction();
}

function secondFunction() {
    console.log("Second Function");
}

firstFunction(); // Output: First Function -> Second Function
