const Sequelize = require("sequelize");
const db = require("../connection/db");
const Categorias = require("../models/categorias")

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

// Perguntas.belongsTo(Usuario);

// Usuario.hasMany(Perguntas);

Categorias.hasMany(Perguntas)

Perguntas.belongsTo(Categorias, {
    constraint: true,
    foreignKey: "idCategoria"
})

module.exports = Perguntas;