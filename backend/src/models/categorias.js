const Sequelize = require("sequelize");
const db = require("../connection/db");
const Perguntas = require("./perguntas");

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

// Perguntas.belongsTo(Categorias, {
//     foreignKey: "categorias"
// });

// Categorias.hasMany(Perguntas, {
//     foreignKey: "perguntas"
// })
module.exports = Categorias;