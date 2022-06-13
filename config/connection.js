const mysql = require('mysql2');

require('dotenv').config();

const connection = mysql.createConnection({
  host: 'localhost',
  port: 3023,
  user: 'root',
  password: process.env.MYSQL_PASSWORD,
  database: 'employees_db'
});

module.exports = connection;