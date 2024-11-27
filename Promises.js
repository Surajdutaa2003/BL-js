let myPromise = new Promise((resolve, reject) => {
    let success = true;
    if (success) {
        resolve("Success!");
    } else {
        reject("Failure");
    }
});

myPromise
    .then(result => console.log(result)) // Success!
    .catch(error => console.log(error));
