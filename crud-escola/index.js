const express = require('express')
const app = express()os
const cors = require('cors')
app.use(cors())
app.use(express.json())

app.use((req, res, next) => {
  console.log("-------### LOG da Requisição ###-------")
  console.log("TIME: ", new Date().toLocaleString())
  console.log("METODO: ", req.method)
  console.log("ROTA: ", req.url)
  next()
})

// Roteadores
/*const  = require('./routes/')
app.use(r)*/


app.listen(3000, () => {
  console.log("Api rodando em http://localhost:3000")
})