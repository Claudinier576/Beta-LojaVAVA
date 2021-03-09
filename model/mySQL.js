//sql init
var mysql = require('mysql');

var connection = mysql.createConnection({
    host: 'us-cdbr-east-03.cleardb.com',
    user: 'b054ddf11456f5',
    password: 'dc4633bb',
    database: 'heroku_7d6c6d74bce44f6'
});

function connect() {

    connection.connect(function (err) {
        if (err) {
            console.error('error connecting: ' + err.stack);
            return;
        }

        console.log('connected as id ' + connection.threadId);
    });

}

function register(code) {
    try {

        connection.query(code)

    } catch (err) {
        console.log('Erro:', err)
    }
}

function get(code){
    var result = connection.query(code, function (error, results, fields) {


        console.log('result: ', results)
        console.log('fields:',fields);

    });
   return result.values;

}


function disconnect() {

    console.log('disconnect')
    connection.end();
}

// end

module.exports = {
    get: get,
    register: register,
    connect: connect,
    disconnect: disconnect
}