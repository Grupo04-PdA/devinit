const Sequelize = require("sequelize");
const db = require("../connection/db");
const Categorias = require("../models/categorias")
const Usuario = require("../models/usuario")

const Perguntas = db.define("perguntas", {
    idPergunta: {
        type: Sequelize.DataTypes.INTEGER,
        autoIncrement: true,
        allowNull: false,
        primaryKey: true
    },
    pergunta: {
        type: Sequelize.DataTypes.STRING,
        allowNull: false,
    },
});

Usuario.hasMany(Perguntas, {
    foreignKey: "idUsuario"
});

Perguntas.belongsTo(Usuario, {
    constraint: true,
    foreignKey: "idUsuario"
});

Categorias.hasMany(Perguntas, {
    foreignKey: "idCategoria"
})

Perguntas.belongsTo(Categorias, {
    constraint: true,
    foreignKey: "idCategoria"
})

module.exports = Perguntas;