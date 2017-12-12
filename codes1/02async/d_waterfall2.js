var async = require("async");


function fn1(cb) {
    console.log("开始执行fn1中的方法");
    setTimeout(function () {
        cb(null, 10);
    }, 1000);
}

function fn2(count, cb) {
    console.log("开始执行fn2中的方法");
    var arrContent = [];
    for (var i = 0; i < count; i++) {
        arrContent.push(i);
    }

    var interval = setInterval(function () {
        if (arrContent.length <= 0) {
            clearInterval(interval);
            cb(null, "fn2中返回的信息");
        } else {
            arrContent.pop();
        }
    }, 500);
}

function fn3(cb) {
    console.log("开始执行fn3中的方法");
    cb(null, "ok");
}

async.waterfall([fn1, fn2, fn3], function () {

});