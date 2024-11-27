function fetchData(callback) {
    setTimeout(() => {
        console.log("Data fetched!");
        callback();
    }, 1000);
}

fetchData(function() {
    console.log("Callback executed");
});
