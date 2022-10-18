const Sequelize = require("sequelize");
const db = require("../connection/db");

const Categorias = db.define("categorias", {
    idCategoria: {
        type: Sequelize.DataTypes.INTEGER,
        allowNull: false,
        autoIncrement: true,
        primaryKey: true
    },
    categoria: {
        type: Sequelize.DataTypes.STRING,
        allowNull: false,
    }
});

module.exports = Categorias;