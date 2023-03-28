const {Model, DataTypes, Sequelize}= require("sequelize");


let sequelize = require('../../../common/dbConnection');

class JTable extends Model{}

JTable.init(
    {
    id:{
        primaryKey:true,
        autoIncrement:true,
        allowNull:false,
        type:DataTypes.INTEGER(),
    },
},
    {
        timestamps:true,
        paranoid:true,
        sequelize,
        modelName: "JTable"
    }
);


module.exports = JTable