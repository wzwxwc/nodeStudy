var common = require("./varInCommon");

function changeCommon() {
    common.a = "被a改变了";
}

module.exports = changeCommon;