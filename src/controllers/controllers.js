const mongoose = require("mongoose")
const Ciudad = require("../models/schema")

const enviarCiudad = (req,res) =>{
    const data = req.body
    console.log(data)
    try{
        const enviarCiudad = Ciudad.create(data)
        res.send("Ciudad enviada correctamente")
    } catch(error){
        console.log(error)
    }
}

const obtenerCiudad = (req,res) =>{
    res.send("ciudad obetenida correctamente")
}


module.exports = {enviarCiudad, obtenerCiudad}