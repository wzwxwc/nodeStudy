var common = require("./varInCommon");

function changeCommon() {
    common.a = "被b改变了";
}

module.exports = changeCommon;