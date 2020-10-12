class Tables {
  init(connection) {
    this.connection = connection
    this.createCalls()
  }

  createCalls() {
    const sql = `CREATE TABLE IF NOT EXISTS atendimentos(
      id INT NOT NULL AUTO_INCREMENT,
      cliente VARCHAR(50) NOT NULL,
      pet VARCHAR(20),
      servico VARCHAR(20) NOT NULL,
      status VARCHAR(20) NOT NULL,
      observacoes text,
      PRIMARY KEY (id)
    );`
    this.connection.query(sql, (error) => {
      if (error) {
        console.error(error)
      } else {
        console.log('Tabela atendimentos criada com sucesso')
      }
    })
  }
}

module.exports = new Tables()
