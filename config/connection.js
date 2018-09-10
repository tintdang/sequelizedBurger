// Set up mysql connection
var mysql = require("mysql")

//set up credentials
var connection = mysql.createConnection({
    host: "localhost",
    port: 3306,
    user: "root",
    password: "root",
    database: "burger_db"
});

connection.connect(function(err){
    if(err) {
        console.error(`error connecting: ${err.stack}`)
        return;
    }
    console.log(`Connected as id ${connection.threadId}`)
})

module.exports = connection;