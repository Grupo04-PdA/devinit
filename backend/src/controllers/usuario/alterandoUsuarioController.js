const { hash } = require("bcrypt")

const alterandoUsuarioController = async (req, res) => {
    try {
        let usuario = require("../../models/usuario");
        const id = req.params.id;
        const { nome, email, senha } = req.body;
        const usuarioExistente = usuario.findByPk(id);
        const senhaHash = await hash(senha, 8)
        await usuario.update({
            nome: nome || usuarioExistente.nome,
            email: email || usuarioExistente.email,
            senha: senhaHash || usuarioExistente.senha
        }, { where: { id: id } });
        const usuarioAtualizado = await usuario.findByPk(id);
        return res.json({ message: "Usuario atualizado com sucesso!", usuario: usuarioAtualizado })
    } catch (err) {
        return res.json({ message: "Ocorreu um erro!" })
    }
};

module.exports = alterandoUsuarioController;