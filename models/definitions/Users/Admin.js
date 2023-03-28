const {Model, DataTypes, Sequelize}= require("sequelize");


let sequelize = require('../../../common/dbConnection');

class Admin extends Model{}

Admin.init(
    {
    id:{
        primaryKey:true,
        autoIncrement:true,
        allowNull:false,
        type:DataTypes.INTEGER(),
    },
    roleID:{
        allowNull:false,
        type:DataTypes.INTEGER(),
    }
},
    {
        timestamps:true,
        paranoid:true,
        sequelize,
        modelName: "Admin"
    }
);


module.exports = Admin