var a = require("./a");

console.log(a.a1);

a.a1 = "aaa";

var b = require("./a");
console.log(b.a1);
// console.log(global.warning);