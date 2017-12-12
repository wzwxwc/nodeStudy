function wait(duration) {
    return new Promise(function (resolve, reject) {
        setTimeout(resolve, duration);
    })
}

wait(200).then(fn1).then(fn2).then(function () {
    fn3();
}).then(function () {
    fn4();
});

function fn1() {
    setTimeout(function () {
        console.log("hello");
    }, 1000);
}

function fn2() {
    setTimeout(function () {
        console.log("world");
    }, 1000)
}

function fn3() {
    setTimeout(function () {
        console.log("你好");
    }, 1000)
}

function fn4() {
    console.log("fn4的立刻执行代码");
    setTimeout(function () {
        console.log("世界");
    }, 1000)
}