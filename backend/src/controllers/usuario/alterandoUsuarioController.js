const alterandoUsuarioController = async (req, res) => {
    let usuario = require("../../models/usuario");
    const id = req.params.id;
    const { nome, email, senha } = req.body;
    const usuarioExistente = usuario.findByPk(id);
    await usuario.update({
        nome: nome || usuarioExistente.nome,
        email: email || usuarioExistente.email,
        senha: senha || usuarioExistente.senha
    }, { where: { id: id } });
    const usuarioAtualizado = await usuario.findByPk(id);
    return res.json({ message: "Usuario atualizado com sucesso!", usuario: usuarioAtualizado })
};

module.exports = alterandoUsuarioController;