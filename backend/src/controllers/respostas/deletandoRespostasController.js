const Respostas = require("../../models/respostas");

const deletandoRespostasController = async (req, res) => {
    try {
        let resposta = require("../../models/respostas");
        const id = req.params.id;
        const user = await Respostas.findByPk(id);

        if (user) {
            await resposta.destroy({
                where: {
                    id: id
                }
            })
        } else {
            return res.json({ message: "Resposta não encontrada!" });
        }

        return res.json({ message: "Resposta deletado com sucesso!", resposta: user })
    } catch (error) {
        res.json({message: "Ocorreu um erro"});
    };
}

module.exports = deletandoRespostasController;