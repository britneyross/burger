var mysql = require('mysql');

var pool = mysql.createPool({
    connectionLimit: 10,
    host: "localhost",
    user: "root",
    password: "Texas1994!",
    database: "burgers_place"

});

module.exports = pool;