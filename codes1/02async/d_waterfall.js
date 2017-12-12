var async = require("async");
var task1 = function (callback) {
    console.log("task1");
    setTimeout(function () {
        //下属如果null为其他参数，waterfall就当作发生错误，进而中断执行
        callback("haha", "11", "22")
    }, 2000);
};

var task2 = function (a, b, callback) {
    console.log("task2");
    console.log("task1函数传入的值: " + a + "和" + b);
    setTimeout(function () {
        callback(null, "22")
    }, 2000);
};

var task3 = function (q, callback) {
    console.log("task3");
    console.log("task2函数传入的值: " + q);
    setTimeout(function () {
        callback(null, "33")
    }, 2000);
};
console.time("waterfall方法");
async.waterfall([task1, task2, task3], function (err, result) {
    console.log("waterfall");
    if (err) {
        console.log(err);
    }
    console.log("result : " + result);
    console.timeEnd("waterfall方法");
});