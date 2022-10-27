const Sequelize = require("sequelize");
const db = require("../connection/db");
const Perguntas = require("./perguntas");
const Usuario = require("./usuario")

const Respostas = db.define("respostas", {
    idResposta: {
        type: Sequelize.DataTypes.INTEGER,
        allowNull: false,
        autoIncrement: true,
        primaryKey: true
    },
    resposta: {
        type: Sequelize.DataTypes.STRING,
        allowNull: false,
    }
});

Usuario.hasMany(Respostas, {
    foreignKey: "idUsuario"
})

Respostas.belongsTo(Usuario, {
    constraint: true,
    foreignKey: "idUsuario"
});

Perguntas.hasMany(Respostas, {
    foreignKey: "idPergunta"
})

Respostas.belongsTo(Perguntas, {
    constraint: true,
    foreignKey: "idPergunta"
})

module.exports = Respostas;