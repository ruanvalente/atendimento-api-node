require('dotenv').config({ path: '.env' })
const server = require('./app')
const PORT = process.env.PORT || 3000
const connection = require('./database/index')
const Tables = require('./database/tables')

server.listen(process.env.PORT, (error) => {
  if (error) {
    console.error(error)
  } else {
    connection.connect((error) => {
      if (error) {
        console.error(error)
      } else {
        console.log('conectado com o banco')
        Tables.init(connection)
        console.log(`Servidor rodando 🚀 http://localhost:${PORT}`)
      }
    })
  }
})
