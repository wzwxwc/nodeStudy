/* ES5 */
var isMomHappy = false;
// Promise
var willIGetNewPhone = new Promise(
    function (resolve, reject) {
        if (isMomHappy) {
            var phone = {
                brand: 'HuaWei',
                color: 'black'
            };
            resolve(phone); // 完成了
        } else {
            var reason = new Error('妈妈不开心');
            reject(reason); // reject
        }
    }
);

var showOff = function (phone) {
    return new Promise(
        function (resolve, reject) {
            var message = 'hey 伙计，我有个新 ' +
                phone.color + ' ' + phone.brand + '手机';
            resolve(message);
        }
    );
};

// 调用我们的 Promise
var askMom = function () {
    willIGetNewPhone
        .then(showOff)
        .then(function (fulfilled) {
            // 太好啦, 你获得了一个新手机
            console.log(fulfilled);
            // output: { brand: 'Samsung', color: 'black' }
        })
        .catch(function (error) {
            // 好不幸，你妈妈没买手机
            console.log(error.message);
            // output: '妈妈不开心'
        });
};
askMom();
