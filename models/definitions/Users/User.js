const {Model, DataTypes, Sequelize}= require("sequelize");


let sequelize = require('../../../common/dbConnection');

class User extends Model{}

User.init(
    {
    id:{
        primaryKey:true,
        autoIncrement:true,
        allowNull:false,
        type:DataTypes.INTEGER(),
    },
    firstName:{
        primaryKey:true,
        type:DataTypes.STRING()
    },
    lastName:{
        primaryKey:true,
        type:DataTypes.STRING()
    },
    email:{
        unique:true,
        allowNull:true,
        type:DataTypes.STRING()
    },
    phoneNumber:{
        unique:true,
        allowNull:false,
        type:DataTypes.STRING()
    },
    password:{
        allowNull:false,
        type:DataTypes.STRING()
    },
},
    {
        timestamps:true,
        paranoid:true,
        sequelize,
        modelName: "User"
    }
);


module.exports = User