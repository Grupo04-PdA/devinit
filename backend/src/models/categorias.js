const Sequelize = require("sequelize");
const db = require("../connection/db");

const Categorias = db.define("categorias", {
    id: {
        type: Sequelize.DataTypes.INTEGER,
        allowNull: false,
        autoIncrement: true,
        primaryKey: true
    },
    nome: {
        type: Sequelize.DataTypes.STRING,
        allowNull: false,
    },
});
    Perguntas.belongsTo(Categorias, {
    foreignKey: "categorias"
});

Categorias.many(Perguntas, {
    foreignKey: "perguntas"
})
module.exports = Categorias;