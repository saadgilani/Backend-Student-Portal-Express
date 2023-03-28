const {Model, DataTypes, Sequelize}= require("sequelize");


let sequelize = require('../../../common/dbConnection');

class Students extends Model{}

Students.init(
    {
    id:{
        primaryKey:true,
        autoIncrement:true,
        allowNull:false,
        type:DataTypes.INTEGER(),
    },
    department:{
        allowNull:false,
        type: DataTypes.STRING(),
    },
    semester:{
        allowNull: false,
        type: DataTypes.INTEGER(),
    },
    rollNumber:{
        allowNull:false,
        type:DataTypes.STRING(),
    },
    typeOfUser:{
        allowNull:false,
        type:DataTypes.STRING(),
    }
},
    {
        timestamps:true,
        paranoid:true,
        sequelize,
        modelName: "Students"
    }
);


module.exports = Students