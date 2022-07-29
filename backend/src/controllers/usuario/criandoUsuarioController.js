const criandoUsuarioController = async (req, res) => {
    const db = require("../../connection/db")
    const usuario = require("../../models/usuario")

    await db.sync()

    const { nome, email, senha } = req.body
    const novoUsuario = await usuario.create({
        nome, email, senha
    });
    console.log(novoUsuario)
    return res.json({Usuario: novoUsuario})
};

module.exports = criandoUsuarioController