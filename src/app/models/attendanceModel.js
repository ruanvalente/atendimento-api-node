const connection = require('../database/index')
const { format } = require('date-fns')

class Attendance {
  store(attendance) {
    const attendanceDate = format(attendance.data, 'yyyy-MM-dd HH:mm', {
      timeZone: 'America/Sao_Paulo',
    })
    const data = format(attendanceDate, 'yyyy-MM-dd HH:mm', {
      timeZone: 'America/Sao_Paulo',
    })

    const createAttendance = {
      ...attendance,
      dataCriacao: attendanceDate,
      data,
    }
    const sql = `INSERT INTO atendimentos SET ?;`

    connection.query(sql, createAttendance, (error, result) => {
      if (error) {
        console.error(error)
      } else {
        console.log('tudo ok', result)
      }
    })
  }
}

module.exports = new Attendance()
