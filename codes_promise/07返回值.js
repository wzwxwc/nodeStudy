var p = new Promise(function (resolve, reject) {
    resolve("123");
});

var resultOfThen = p.then(function (arg1) {
    setTimeout(function () {
        var result1 = arg1 + 3;
        return result1;
    }, 3000);
});

console.log(resultOfThen == p);