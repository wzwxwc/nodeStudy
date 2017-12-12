/*
*有一个缺点：
* 如果其中一个报错，那么在最终的结果不会显示正常
* 而且它好像是有执行顺序的！
* 有没有一个失败，不影响其他的，并且最终的结果只是成功的数组？
* */


var async = require("async");
var task1 = function (callback) {
    console.log("task1中的同步代码");
    setTimeout(function () {
        console.log("task1中的异步代码");
        callback(null, "task1")
    }, 5000);
};

var task2 = function (callback) {
    console.log("task2中的同步代码");
    setTimeout(function () {
        console.log("task2中的异步代码");
        callback("发生错误", "task2")
    }, 1000);
};

var task3 = function (callback) {
    console.log("task3中的同步代码");
    var a = 123;
    setTimeout(function () {
        console.log("task3中的异步代码");
        console.log(a);
        callback(null, "task3")
    }, 3000);
};
console.time("parallel方法");
console.log("parallel方法前");
async.parallel([task2, task1, task3], function (err, result) {
    console.log("parallel方法内部");
    if (err) {
        console.log(err);
    }
    console.log(result);
    console.timeEnd("parallel方法");
});
console.log("parallel方法后");

