var invisible = function () {
    console.log("invisible");
};
//不能直接给exports变量赋一个对象值
exports = {
    message: "hi",
    say: function () {
        console.log(message);
    }
};