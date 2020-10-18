const attendanceModel = require('../models/attendanceModel')

module.exports = {
  index(request, response) {
    attendanceModel.index(response)
  },

  store(request, response) {
    const data = request.body

    const attendance = attendanceModel.store(data, response)
    return response.status(201).json(attendance)
  },
}
