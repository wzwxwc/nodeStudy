var async = require("async");
var arrTask = [];
var count = 0;

function fntest() {
    return count < 3;
}

function fn() {

}

async.forever(fntest, fn, function (err) {
    if (err) {
        console.log("发生错误");
        console.log(err);
    }
    console.time("parallel方法");
    console.log("parallel方法前");
    async.parallel(arrTask, function (err, result) {
        console.log("parallel方法内部");
        if (err) {
            console.log(err);
        }
        console.log(result);
        console.timeEnd("parallel方法");
    });
    console.log("parallel方法后");
});

async.forever(function (callback) {
    count++;
    var task = function (callback) {
        console.log("task" + count + "中的同步代码");
        setTimeout(function () {
            console.log("task" + count + "中的异步代码");
            callback(null, "task" + count)
        }, 3000);
    };
    arrTask.push(task);
}, function (err) {
    console.log("发生错误");
});





