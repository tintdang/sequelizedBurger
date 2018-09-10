var connection = require("./connection.js")

var orm = {
    selectAll: function(table, cb){
        var queryString = `SELECT * FROM ${table};`;
        console.log(queryString)
        connection.query(queryString, function(err, result){
            if (err) throw err;
            cb(result);
        });
    },
    //INSERT INTO burgers (burger_name) VALUES(burgername here)
    insertOne: function(table, col, val, cb){
        var queryString = `INSERT INTO ${table} (${col}) VALUES (?);`
        console.log(queryString)
        connection.query(queryString, val, function(err, result){
            if (err) throw err;

            cb(result);
        })
    },
    //UPDATE burgers SET (devoured = true) WHERE id = ?
    updateOne: function(table, condition, cb){
        var queryString = `UPDATE ${table} SET devoured=true WHERE ${condition}`
        console.log(queryString)
        connection.query(queryString, function(err, result){
            if (err) throw err;
            cb(result);
        })
    }
}

module.exports = orm;