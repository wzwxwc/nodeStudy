var invisible = function () {
    console.log("invisible");
};
var message = "你好";

module.exports = {
    message: "hi",
    say: function () {
        console.log(this.message);
    }
};