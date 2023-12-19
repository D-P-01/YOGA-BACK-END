const mysql = require('mysql');
const dotenv = require('dotenv');
dotenv.config();

const connection = mysql.createConnection({
  host: 'xxxxxxxx',
  user: 'xxxxxxx',
  password: 'xxxxx',
  database: 'xxxx'
});

connection.connect();

module.exports = connection;
