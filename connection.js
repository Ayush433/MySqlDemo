const mysql = require("mysql2");

const mysqlConnection = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "123456789@a",
  database: "demodb",
});
mysqlConnection.connect((err) => {
  if (err) {
    console.log("error in Db connection");
  } else {
    console.log("Db connected Successfully");
  }
});

module.exports = mysqlConnection;
