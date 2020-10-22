const moment = require('moment')
const connection = require('../config/index')
const attendanceRepository = require('../repositories/attendanceRepository')

const index = async () => {
  const attendances = await attendanceRepository.findAll(
    connection,
    'atendimentos'
  )
  return attendances
}

const store = async (attendance) => {
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
    return erros
  }

  const createAttendance = await attendanceRepository.create(
    connection,
    {
      ...attendance,
      dataCriacao: attendanceDate,
      data,
    },
    'atendimentos'
  )
  return createAttendance
}

const show = async (id) => {
  const attendance = await attendanceRepository.findByID(
    connection,
    id,
    'atendimentos'
  )
  return attendance
}

module.exports = {
  index,
  store,
  show,
}
