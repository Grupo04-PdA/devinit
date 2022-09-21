const { hash } = require("bcrypt");

const criandoUsuarioController = async (req, res) => {
    try {
        const db = require("../../connection/db")
        const usuario = require("../../models/usuario")
    
        await db.sync()
    
        const { nome, email, senha } = req.body
        const senhaHash = await hash(senha, 8)
        const novoUsuario = await usuario.create({
            nome, email, senha: senhaHash, logado: 1
        });
        console.log(novoUsuario)
        return res.json({Usuario: novoUsuario})
    } catch(err){
        return res.json({error: "Ocorreu um erro!"})
    }

};

module.exports = criandoUsuarioController