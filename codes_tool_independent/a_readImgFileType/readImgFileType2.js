/*
* 参考文章
* https://www.cnblogs.com/meteoric_cry/archive/2012/12/31/2840816.html
*
* */

var imageinfo = require("imageinfo");
var fs = require("fs");
var path = require("path");

// var new_file_path = path.join(__dirname, "./img/pic1.jpg");     //结果：PNG
var new_file_path = path.join(__dirname, "./img/pic2.jpg");     //结果：JPG
// var new_file_path = path.join(__dirname, "./img/texture.jpg");  //结果：JPG
// var new_file_path = path.join(__dirname, "./img/texture.png");     //结果：JPG
var fileData = fs.readFileSync(new_file_path);
var info = imageinfo(fileData);

console.log("Data is type:", info.mimeType, info.format);
console.log("   Size：", fileData.length, "bytes");
console.log("   Dimensions:", info.width, "x", info.height);
