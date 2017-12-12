'use strict';
const fs = require('fs');

// 模拟异步
console.time('setout');
setTimeout(function(){
    console.timeEnd('setout');
},0);
setImmediate(function(){
    console.log('setImmediate');
})
process.nextTick(function(){
    console.log('process.nextTick');
})

// 用于阻塞主线程
for(var i=0;i<10000000;i++){}
console.log('for循环之后');

// 异步读取文件
fs.readFile('./data/1.txt','utf8',function(err,data){
    if(err){
        return console.log('读取错误啦');
    }
    fs.writeFile('./data/2.txt',data,'utf8',function(err){
        if(err){
            return console.log('写入错误啦');
        }
        console.log('异步读取完成');
    })
})

// 同步读取文件
fs.readFileSync('./data/1.txt');
console.log('同步读取文件结束');