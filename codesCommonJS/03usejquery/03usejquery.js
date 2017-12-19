var jsdom = require("jsdom");
jsdom.env("http://www.baidu.com", function (err, window) {
    if (err) {
        console.error(err);
        return;
    }

    var $ = require("jquery")(window);
    $.ajax({
        url: "www.baidu.com",
        success: function (result) {
            console.log(result);
        }
    })
});