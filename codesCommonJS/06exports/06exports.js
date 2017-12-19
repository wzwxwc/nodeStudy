var a = require("./a.js");
console.log(a);

var b = require("./b");
console.log(b);

var c = require("./c");
console.log(c);
c.say();

//为什么c的输出和a不一样？
//c多了一个say字

Object.keys(require.cache).forEach(function (key) {
    console.log(require.cache[key].filename);
});