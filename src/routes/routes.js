const express = require("express")
const { enviarCiudad, obtenerCiudad } = require("../controllers/controllers")
const route = express.Router()

route.post("/ciudad", enviarCiudad)
route.get("/ciudad", obtenerCiudad)

module.exports = { route }