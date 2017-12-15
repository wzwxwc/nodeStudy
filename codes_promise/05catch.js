var p = new Promise(function (resolve, reject) {
    // resolve("hehe");
    reject({
        message: "发生错误了"
    })
});

p.then(function (value) {
    console.log(value);
    // throw new Error("123");
}).catch(function (value) {
    console.log(value.message);
});