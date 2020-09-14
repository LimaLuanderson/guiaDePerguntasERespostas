const connection = require("./db");
const  Sequelize  = require("sequelize");



const Pergunta = connection.define('pergunta', {
    titulo:{
        type: Sequelize.STRING,
        AllowNull:false
    },
    descricao: {
        type: Sequelize.TEXT,
        AllowNull: false
    }
});

//Pergunta.sync({force: false}).then(()=>{});
module.exports = Pergunta;