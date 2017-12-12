var co = require("co");

co(function* () {
    console.log("111");
    var test = yield fnAsync();
    console.log(test);
    console.log("333");
});

function fnAsync() {
    return new Promise(function (resolve) {
        setTimeout(function () {
            resolve("222");
        }, 200);
    });
}