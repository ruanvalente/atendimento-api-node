const findAll = (connection, tableName, params) => {
  const offSet = params.currentPage * params.pageSize
  const pageSize = params.pageSize

  const sql = `SELECT * FROM ${tableName} LIMIT ${offSet}, ${pageSize}`

  return new Promise((resolve, reject) => {
    connection.query(
      `SELECT COUNT(*) AS total FROM ${tableName}`,
      (error, result) => {
        const total = result[0].total
        const totalPage = parseInt(total / pageSize)
        if (error) {
          reject(error)
        } else {
          connection.query(sql, (error, result) => {
            if (error || !tableName) {
              reject(error)
            } else {
              resolve({
                data: result,
                pagination: {
                  pages: totalPage,
                  pageSize,
                  currentPage: parseInt(params.currentPage),
                  total,
                },
              })
            }
          })
        }
      }
    )
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

const findByID = (connection, id, tableName) => {
  const sql = `SELECT * FROM ${tableName} WHERE id = ${id}`

  return new Promise((resolve, reject) => {
    connection.query(sql, (error, result) => {
      if (error || !tableName) {
        reject(error)
      }

      if (result.length > 0) {
        resolve(result[0])
      } else {
        resolve()
      }
    })
  })
}

module.exports = {
  findAll,
  create,
  findByID,
}
