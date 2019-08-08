const mysql = require("mysql");

let connection = mysql.createConnection( process.env.JAWSDB_URL||{
    host: "localhost",
    port: 3306,
    user: "root",
    password: "password",
    database: "burgers_db"
})

module.exports = connection;