var p1 = new Promise(function (resolve, reject) {
    var value = 123;
    setTimeout(function () {
        if (true) {
            resolve(value);
        } else {
            reject(error);
        }
    }, 5000);
});

var p2;
p1.then(function (value) {
    console.log("success2");
    p2 = new Promise(function (resolve, reject) {
        setTimeout(function () {
            var value = 456;
            if (true) {
                resolve(value);
            } else {
                reject(value);
            }
        })
    });
    p2.then(function (value) {
        // success
        console.log("success3");
    }, function (value) {
        // failure
        console.log("failure3");
    });
}, function (value) {
    // failure
    console.log("failure");
});


console.log("最后面的执行语句");