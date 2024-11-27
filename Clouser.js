function outer() {
    let counter = 0;
    return function inner() {
        counter++;
        console.log(counter);
    };
}

const increment = outer();
increment(); // 1
increment(); // 2
