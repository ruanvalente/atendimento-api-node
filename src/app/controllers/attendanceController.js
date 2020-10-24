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
      return response.status(201).send()
    } catch (error) {
      console.log(error)
      return response.status(400).json({ message: error.message })
    }
  },

  async show(request, response) {
    try {
      const { id } = request.params
      const attendance = await attendanceModel.show(id)

      if (!attendance) {
        return response.status(404).json({ message: 'Registro não encontrado' })
      }

      return response.status(200).json({ data: attendance })
    } catch (error) {
      return response.status(400).json({ message: error.message })
    }
  },
}
