const { hash } = require("bcrypt");

const criandoUsuarioController = async (req, res) => {
    try {
        const db = require("../../connection/db")
        const usuario = require("../../models/usuario")
    
        await db.sync()
    
        const { nome, nomeDeUsuario, email, senha, foto } = req.body
console.log(nomeDeUsuario)
        const usuarioExistente = await usuario.findOne({ where: { email: email } });

        if(usuarioExistente) {
            return res.json("Email invalido!")
        }

        const senhaHash = await hash(senha, 8)
        const novoUsuario = await usuario.create({
            nome, nomeDeUsuario, email, senha: senhaHash, logado: 1, foto: "https://cdn-icons-png.flaticon.com/512/5087/5087579.png"
        });
        console.log(novoUsuario)
        return res.json({Usuario: novoUsuario})
    } catch(err){
        return res.json({error: err})
    }

};

module.exports = criandoUsuarioController