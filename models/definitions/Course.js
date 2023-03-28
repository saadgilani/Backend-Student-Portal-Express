const {Model, DataTypes, Sequelize}= require("sequelize");


let sequelize = require('../../common/dbConnection');

class Course extends Model{}

Course.init(
    {
    id:{
        primaryKey:true,
        autoIncrement:true,
        allowNull:false,
        type:DataTypes.INTEGER(),
    },
    courseTitle:{
        allowNull:false,
        type:DataTypes.STRING(),
    },
    courseID:{
        allowNull: false,
        type: DataTypes.STRING(),
    },
    creditHour:{
        allowNull: false,
        type: DataTypes.INTEGER(),
    },
    lab:{
        allowNull: false,
        type: DataTypes.BOOLEAN(),
    }
},
    {
        timestamps:true,
        paranoid:true,
        sequelize,
        modelName: "Course"
    }
);


module.exports = Course