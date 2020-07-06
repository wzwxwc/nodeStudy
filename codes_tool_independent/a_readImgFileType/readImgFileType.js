/*
* 参考文章
* https://www.cnblogs.com/meteoric_cry/archive/2012/12/31/2840816.html
*
* */

var fs = require("fs");
var path = require("path");

var new_file_path = path.join(__dirname, "./img/pic1.jpg");
var fd = fs.openSync(new_file_path, 'r');
var buffer = new Buffer(8);

var mineType = mime.lookup(new_file_path);
var fileType = mime.extension(mineType);

fs.readSync(fd, buffer, 0, 8, 0);
var newBuf = buffer.slice(0, 4);
var head_1 = newBuf[0].toString(16);
var head_2 = newBuf[1].toString(16);
var head_3 = newBuf[2].toString(16);
var head_4 = newBuf[3].toString(16);
var head_iden = head_1 + head_2;

var tempFileType = FILE_TYPE_CONFIG[head_iden];
if (!tempFileType) {
    head_iden += head_3;

    tempFileType = FILE_TYPE_CONFIG[head_iden];

    if (!tempFileType) {
        var msg = "Unknow fileType " + new_file_path + '-' + fileType;
        showLog(msg);
        // continue;
    }
}

if (tempFileType != fileType) {
    var msg = "Error fileType" + new_file_path + '-' + fileType + '|' + tempFileType + '--正确的图像文件格式';
    showLog(msg);

    g_errorFileTypArr.push(msg);
}