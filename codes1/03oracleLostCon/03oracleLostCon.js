var oracledb = require('oracledb');
var ws = require('fs').createWriteStream('test.out');

oracledb.getConnection({
    user: "emergencydev",
    password: "emergencydev",
    connectString: "192.168.29.68:1521/gxdev"
}, function (err, connection) {

    if (err) return console.trace(error);

    var stream = connection.queryStream('select * from zclatlng');

    stream.on('data', function (data) {
        ws.write(data + '\n');
    });

    stream.on('end', function () {
        ws.end();
    })

    stream.on('error', function (error) {
        console.trace(error);
    });
});