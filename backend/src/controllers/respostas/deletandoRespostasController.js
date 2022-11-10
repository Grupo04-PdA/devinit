const Respostas = require("../../models/respostas");

const deletandoRespostasController = async (req, res) => {
    try {
        let resposta = require("../../models/respostas");
        const idResposta = req.params.id;
        const user = await Respostas.findByPk(idResposta);

        if (user) {
            await resposta.destroy({
                where: {
                    idResposta: idResposta
                }
            })
        } else {
            return res.json({ message: "Resposta não encontrada!" });
        }

        return res.json({ error: "Resposta deletado com sucesso!", resposta: user })
    } catch (error) {
        res.json({error: "Ocorreu um erro"});
    };
}

module.exports = deletandoRespostasController;