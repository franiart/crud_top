const mysql = require('mysql2');

const pool = mysql.createPool({
  host: 'localhost',
  user: 'root',
  password: 'Morrogallo1551@',
  database: 'twentyonepilots'
});

module.exports = pool.promise();