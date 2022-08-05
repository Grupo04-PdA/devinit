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

module.exports = Categorias;