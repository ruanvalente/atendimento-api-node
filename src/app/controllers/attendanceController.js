const attendanceModel = require('../models/attendanceModel')

module.exports = {
  async index(request, response) {
    try {
      const attendances = await attendanceModel.index(request)
      return response.status(200).json(attendances)
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

  async update(request, response) {
    try {
      const { id } = request.params
      const attendance = request.body

      await attendanceModel.update(attendance, id)

      return response.status(200).json({ data: attendance })
    } catch (error) {
      return response.status(400).json({ message: error.message })
    }
  },

  async destroy(request, response) {
    try {
      const { id } = request.params
      const idExist = await attendanceModel.show(id)

      if (!idExist) {
        return response.status(404).json({ message: 'Registro não encontrado' })
      }
      await attendanceModel.destroy(id)
      return response.status(204).send()
    } catch (error) {
      return response.status(400).json({ message: error.message })
    }
  },
}
