// Importing the needed node packages
var mysql = require("mysql");

// Setting up the connection to the database
var connection = mysql.createConnection({
  port: 3306,
  host: "localhost",
  user: "root",
  password: "I<3L3xikins",
  database: "burgers_db"
});

// Making connection
connection.connect(function(err) {
  if (err) {
    console.error("error connecting: " + err.stack);
    return;
  }
  console.log("connected as id " + connection.threadId);
});

// Exporting connection for the ORM to use
module.exports = connection;
