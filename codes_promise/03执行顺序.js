let promise = new Promise(function (resolve, reject) {
    console.log('Promise');
    resolve();
});

//then是异步的，即使时候立马知道了then的结果
//也还是要被作为异步来执行
promise.then(function () {
    console.log('resolved.');
});

console.log('Hi!');