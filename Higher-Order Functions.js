function higherOrder(fn) {
    fn();
}

higherOrder(() => console.log("Higher order function executed"));
