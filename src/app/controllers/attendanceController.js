const attendanceModel = require('../models/attendanceModel')

module.exports = {
  async index(request, response) {
    try {
      const attendances = await attendanceModel.index()
      return response.status(200).json({ data: attendances })
    } catch (error) {
      return response.status(400).json({ message: error.message })
    }
  },

  async store(request, response) {
    try {
      const data = request.body

      await attendanceModel.store(data)
      return response.status(201).json({})
    } catch (error) {
      return response.status(400).json({ message: error.message })
    }
  },
}
