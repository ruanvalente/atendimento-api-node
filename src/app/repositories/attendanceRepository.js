const findAll = (connection, tableName) => {
  const sql = `SELECT * FROM ${tableName}`

  return new Promise((resolve, reject) => {
    connection.query(sql, (error, result) => {
      if (error || !tableName) {
        reject(error)
      } else {
        resolve(result)
      }
    })
  })
}

const create = (connection, data, tableName) => {
  const sql = `INSERT INTO ${tableName} (cliente, pet, servico, status, data, dataCriacao, observacoes) VALUES ('${data.cliente}', '${data.pet}', '${data.servico}', '${data.status}', '${data.data}', '${data.dataCriacao}', '${data.observacoes}');`

  return new Promise((resolve, reject) => {
    connection.query(sql, (error) => {
      if (error || !tableName) {
        reject(error)
      } else {
        resolve()
      }
    })
  })
}

module.exports = {
  findAll,
  create,
}
