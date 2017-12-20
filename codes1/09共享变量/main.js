var a = require("./a");
var b = require("./b");
var common = require("./varInCommon");

console.log(common.a);
a();
console.log(common.a);
b();
console.log(common.a);