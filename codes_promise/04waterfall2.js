function getPromise(args) {
    var p = new Promise(function (resolve, reject) {
        resolve(args);
    });
    return p;
}

getPromise(1).then(function (arg1) {
    //执行顺序1
    var p2 = new Promise(function (resolve, reject) {
        setTimeout(function () {
            //执行顺序3
            var result1 = arg1 + 3;
            resolve(result1);
        }, 3000);
    });
    return p2;
}).then(function (arg2) {
    //执行顺序2
    console.log(arg2);
});

//js中的回调是一个序列！
//js的回调堆栈，是先进先执行！