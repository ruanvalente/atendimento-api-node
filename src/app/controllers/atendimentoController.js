module.exports = {
  index(request, response) {
    response.json({ message: 'Atendimento ok' })
  },
  create(request, response) {
    console.log(request.body)
    response.json({ message: 'criado' })
  },
}
