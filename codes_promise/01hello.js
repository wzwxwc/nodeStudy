var myPromise = new Promise(function (resolve, reject) {
    var value = 123;
    setTimeout(function () {
        if (true) {
            resolve(value);
        } else {
            reject(error);
        }
    }, 5000);
});

myPromise.then(function (value) {
    // success
    console.log("success");
}, function (value) {
    // failure
    console.log("failure");
});


myPromise.then(function (value) {
    // success
    console.log("success2");
}, function (value) {
    // failure
    console.log("failure2");
});

console.log("最后面的执行语句");