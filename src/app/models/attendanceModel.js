const moment = require('moment')
const connection = require('../database/index')

class Attendance {
  store(attendance, response) {
    const attendanceDate = moment().format('YYYY-MM-DD HH:MM:SS')
    const data = moment(attendance.data, 'DD/MM/YYYY').format(
      'YYYY-MM-DD HH:MM:SS'
    )

    const dataIsValid = moment(data).isSameOrAfter(attendanceDate)
    const clientIsValid = attendance.cliente.length >= 5
    const validate = [
      {
        name: 'cliente',
        isValid: clientIsValid,
        message: 'O nome do cliente deve conter pelo menos cinco caracteres',
      },
      {
        name: 'data',
        isValid: dataIsValid,
        message: 'A data deve ser maior ou igual a data atual',
      },
    ]

    const erros = validate.filter((field) => !field.isValid)
    const errosExist = erros.length

    if (errosExist) {
      response.status(400).json(erros)
    } else {
      const createAttendance = {
        ...attendance,
        dataCriacao: attendanceDate,
        data,
      }

      const sql = `INSERT INTO atendimentos SET ?;`

      connection.query(sql, createAttendance, (error, result) => {
        if (error) {
          response.status(400).json({ message: error.message })
        } else {
          console.log('cadastro realizado com sucesso', result)
        }
      })
    }
  }
}

module.exports = new Attendance()
