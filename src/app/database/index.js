const mysql = require('mysql2')
const connection = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: 'docker',
  database: 'atendimento',
})

const query = `CREATE TABLE IF NOT EXISTS atendimento(
  id INT NOT NULL AUTO_INCREMENT,
  name VARCHAR(255) NOT NULL,
  age INT(2) NOT NULL,
  phone VARCHAR(255) NOT NULL,
  email VARCHAR(255) NOT NULL UNIQUE,
  PRIMARY KEY(id)
);`

connection.execute(query, (error) => {
  if (error) {
    console.error(error)
  } else {
    console.log('Tabela criada')
  }
})

module.exports = connection
