const mysql = require('mysql2')
const connection = mysql.createConnection({
  host: 'localhost',
  port: 3306,
  user: 'root',
  password: 'docker',
  database: 'agenda_petshop',
})
module.exports = connection
