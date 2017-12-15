function getPromise(args) {
    var p = new Promise(function (resolve, reject) {
        resolve(args);
    });
    return p;
}

getPromise(1).then(function (arg1) {
    //执行顺序1
    setTimeout(function () {
        //执行顺序3
        var result1 = arg1 + 3;
        return result1;
    }, 3000);
}).then(function (arg2) {
    //执行顺序2
    setTimeout(function () {
        console.log(arg2);
    }, 2000)
});

//js中的回调是一个序列！
//js的回调堆栈，是先进先执行！