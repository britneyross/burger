var pool = require("./connection");

var data;
var executeQuery = function (sql, callback) {

    pool.getConnection(function (err, dbConnection) {
        dbConnection.release();
        if (err) throw err;

        dbConnection.query(sql, function (err, result, fields) {
            if (err) throw err;
            if (callback) {
                callback(result);
            }
        });
    });
}


module.exports.selectAll = function (callback) {

    executeQuery("SELECT * FROM burgers", callback);

}

module.exports.insertOne = function (name, callback) {
    var sql = "INSERT INTO burgers (burger_name, devoured) VALUES ('" + name + "', 0)";
    return executeQuery(sql, callback);
}

module.exports.updateOne = function (id, devoured) {

    var sql = "UPDATE burgers SET devoured =" + devoured + " WHERE id = " + id;
    executeQuery(sql);

}