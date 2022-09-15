const Sequelize = require("sequelize");
const db = require("../connection/db");
const Perguntas = require("./perguntas");

const Respostas = db.define("respostas", {
    id: {
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

// Respostas.belongsTo(Usuario, {
//     foreignKey: "idUsuario"
// });

// Usuario.hasMany(Respostas, {
//     foreignKey: "respostas"
// })

// Respostas.belongsTo(Perguntas, {
//    foreignKey: "idPerguntas"
//})
//Perguntas.hasMany(Respostas, {
  //  foreignKey: "respostas"
//})

module.exports = Respostas;