var async = require("async");
var m_count = 0;
var rows = [
    {
        "id": 1,
        "name": "aa"
    },
    {
        "id": 2,
        "name": "bb"
    },
    {
        "id": 3,
        "name": "cc"
    }
];

function fntest() {
    return m_count < 3;
}

function fn(callback) {
    var oneRow = rows[m_count];
    m_count++;
    console.log("task" + oneRow.id + "中的同步代码");
    fnasync(oneRow, callback);
}

function fnasync(oneRow, callback) {
    setTimeout(function () {
        console.log("task" + oneRow.id + "中的第1个异步代码");
        fnasync2(oneRow, callback)
    }, 1000);
}

function fnasync2(oneRow, callback) {
    setTimeout(function () {
        console.log("task" + oneRow.id + "中的第2个异步代码");
        callback(null);
        //下述语句会被执行！
        console.log("这个代码是cb之后的代码，不知道会不会被执行");
    }, 1000);
}

async.whilst(fntest, fn, function (err) {
    if (err) {
        console.log(err);
    }
    console.log("执行完毕");
});


/*
* 说明：
* 相当于while循环,fn函数里不管是同步还是异步都会执行完上一次循环才会执行下一次循环,
* 对异步循环很有帮助,
* test是条件,为true时执行fn里的方法
* */