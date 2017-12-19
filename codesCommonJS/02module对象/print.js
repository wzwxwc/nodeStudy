function print() {
    console.log("module.id:模块的识别符，通常是带有绝对路径的模块文件名。");
    console.log(module.id);
    console.log("module.filename:模块的文件名，带有绝对路径。");
    console.log(module.filename);
    console.log("module.loaded:返回一个布尔值，表示模块是否已经完成加载。");
    console.log(module.loaded);
    console.log("module.parent:返回一个对象，表示调用该模块的模块。");
    console.log(module.parent);
    console.log("module.children:返回一个数组，表示该模块要用到的其他模块。");
    console.log(module.children);
    console.log("module.exports:表示模块对外输出的值。");
    console.log(module.exports);
}

function print2() {
    console.log("module.id:模块的识别符，通常是带有绝对路径的模块文件名。");
    console.log(this.id);
    console.log("module.filename:模块的文件名，带有绝对路径。");
    console.log(this.filename);
    console.log("module.loaded:返回一个布尔值，表示模块是否已经完成加载。");
    console.log(this.loaded);
    console.log("module.parent:返回一个对象，表示调用该模块的模块。");
    console.log(this.parent);
    console.log("module.children:返回一个数组，表示该模块要用到的其他模块。");
    console.log(this.children);
    console.log("module.exports:表示模块对外输出的值。");
    console.log(this.exports);
}

module.exports.print = print;
module.exports.print2 = print2;