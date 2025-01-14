const pegandoUsuarioController = async (req, res) => {
    try {
        const usuario = require("../../models/usuario")
        const usuarios = await usuario.findAll()
        if (usuarios != "") {
            return res.json({ usuarios })
        } else {
            return res.json({ message: "Nenhum usuário foi encontrado!" })
        }
    } catch (err) {
        return res.json({ message: "Ocorreu um erro!" })
    }
}

const pegandoUsuarioIdController = async (req, res) => {
    try {
        const usuario = require("../../models/usuario");
        const id = req.params.id;
        const usuarios = await usuario.findByPk(id);
        if (usuarios) {
            return res.json({ Usuario: usuarios });
        } else {
            return res.json({ message: "Usuário inexistente!" })
        }
    } catch (err) {
        return res.json({ message: "Ocorreu um erro!" })
    }
}

const pegandoPerguntasUSuario = async (req, res) => {
    try {
        const perguntas = require("../../models/perguntas")
        const usuario = require("../../models/usuario");
        const idUsuario = req.params.id;
        const usuariosPergunta = await usuario.findByPk(idUsuario, {include: [{model: perguntas}]});
        if (usuariosPergunta) {
            return res.json({ Perguntas: usuariosPergunta });
        } else {
            return res.json({ message: "Esse usuario não possui perguntas!" })
        }
    } catch (err) {
        return res.json({ message: "Ocorreu um erro!" })
    }
}

module.exports = { pegandoUsuarioController, pegandoUsuarioIdController, pegandoPerguntasUSuario }

