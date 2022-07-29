const pegandoUsuarioController = async(req, res) => {
    const usuario = require("../../models/usuario")
    const usuarios = await usuario.findAll()
    return res.json({usuarios})
}

const pegandoUsuarioIdController = async(req, res) => {
    const usuario = require("../../models/usuario")
    const id = req.params.id
    const usuarios = await usuario.findByPk(id) 
    return res.json({id})  
}

module.exports = {pegandoUsuarioController, pegandoUsuarioIdController}

