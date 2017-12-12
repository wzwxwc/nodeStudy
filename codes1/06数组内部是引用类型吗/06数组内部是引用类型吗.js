var arr = [
    {
        name: "aa"
    },
    {
        name: "bb"
    },
    {
        name: "cc"
    }
];

//下述成功
function fn1() {
    for (var i = 0; i < 3; i++) {
        //直接改变数组中的一个子类型，会直接反馈到数组中
        var one = arr[i];
        one.count = i + 10
    }
}

//下述失败！
//为什么会失败？
function fn2() {
    for (var i = 0; i < 3; i++) {
        var one = arr[i];
        one = i + 10
    }
}

fn2();
console.log(arr);