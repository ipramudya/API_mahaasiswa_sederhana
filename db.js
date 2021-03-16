const mysql = require("mysql2/promise");
const pool = mysql.createPool({
  user: "user_mysql",
  password: "mysqladmin",
  host: "localhost",
  port: "3306",
  database: "basic_mahasiswa_api",
});

module.exports = pool;
