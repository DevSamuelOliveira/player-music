require('dotenv').config()
const express = require('express')
const app = express()

const PORT = process.env.PORT || 3001

class App{
  constructor(){
    this.app = app
    this.middlewares()
    this.routes()
    this.app.listen(PORT, this.msgStartServer)
  }

  middlewares(){
    this.app.use(express.urlencoded({extended: true}))
    this.app.use(express.json())
  }

  routes(){
    const homeRouter = require('./routes/homeRouter')
    this.app.use(homeRouter)
  }

  msgStartServer(){
    console.log("Servidor iniciado com sucesso na porta", PORT)
  }
}

new App()