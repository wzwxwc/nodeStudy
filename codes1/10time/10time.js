console.time("test");
var t1 = new Date();

setTimeout(function () {
    var a = console.timeEnd("test");
    console.log(a);
    var t2 = new Date();
    console.log(t1);
    console.log(t2);
    console.log(t2 - t1);
}, 1000);