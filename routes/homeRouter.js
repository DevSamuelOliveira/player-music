const {Router} = require('express')
const route = Router()

route.get('/', (req, res) => {
  res.send("Rota criada")
})

module.exports = route