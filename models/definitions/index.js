const Sequelize = require('sequelize')
var config = require("../../config.json");
const db = {};
config = config.db;
let sequelize = require('../../common/dbConnection');
const User  = require('./Users/User');
const Admin  = require('./Users/Admin');
const Teacher = require('./Users/Teacher');
const Student  = require('./Users/Student');
const Course=require('./Course');
const JTable=require('./JunctionTables/JTable');
// console.log(sequelize);

//TABLE RELATIONS

//one to many relation students
User.hasOne(Student,{onDelete: 'CASCADE', foreignKey:'userID'});
Student.belongsTo(User,{onDelete: 'CASCADE',foreignKey:'userID'});

// one to many for teacher
User.hasOne(Teacher,{onDelete:'CASCADE',foreignKey:'userID'});
Teacher.belongsTo(User,{onDelete:'CASCADE',foreignKey:'userID'});


Teacher.belongsToMany(Course,{through: {model: JTable, foreignKey:'teacherID'}});
Course.belongsToMany(Teacher,{through: {model: JTable, foreignKey:'courseID'}});

//will add studentID in JTable one to many
Student.hasMany(JTable,{onDelete:'CASCADE',foreignKey:'studentID'});
JTable.belongsTo(Student,{onDelete:'CASCADE',foreignKey:'studentID'});

//will add teacherID in JTable table one to many
// Teacher.hasMany(JTable,{onDelete:'CASCADE', foreignKey:'teacherID'});
// JTable.belongsTo(Teacher,{onDelete:'CASCADE',foreignKey:'teacherID'});

//will add courseID in JTable table one to many
// Course.hasMany(JTable,{onDelete:'CASCADE',foreignKey:'courseID'});
// JTable.belongsTo(Course,{onDelete:'CASCADE',foreignKey:'courseID'});



//will add teacherID in teacher_course table one to many
// Teacher.hasMany(Teacher_Course,{onDelete:'CASCADE', foreignKey:'teacherID'});
// Teacher_Course.belongsTo(Teacher,{onDelete:'CASCADE',foreignKey:'teacherID'});


//will add courseID in teacher_course table one to many
// Course.hasMany(Teacher_Course,{onDelete:'CASCADE',foreignKey:'courseID'});
// Teacher_Course.belongsTo(Course,{onDelete:'CASCADE',foreignKey:'courseID'});


//will add studentID in student_course one to many
// Student.hasMany(Student_Course,{onDelete:'CASCADE',foreignKey:'studentID'});
// Student_Course.belongsTo(Student,{onDelete:'CASCADE',foreignKey:'studentID'});

//will add courseID in Student_Course table one to many
// Course.hasMany(Student_Course,{onDelete:'CASCADE',foreignKey:'courseID'});
// Student_Course.belongsTo(Course,{onDelete:'CASCADE',foreignKey:'courseID'});

// //will add studentID into Student_Teacher
// Student.hasMany(Student_Teacher,{onDelete:'CASCADE',foreignKey:'studentID'});
// Student_Teacher.belongsTo(Student,{onDelete:'CASCADE',foreignKey:'studentID'});


// //will add teacherID into Student_Teacher
// Teacher.hasMany(Student_Teacher,{onDelete:'CASCADE',foreignKey:'teacherID'});
// Student_Teacher.belongsTo(Student_Teacher,{onDelete:'CASCADE',foreignKey:'teacherID'});




// Student.hasMany(Course,{onDelete: 'CASCADE',foreignKey:'courseID'});
// Course.belongsTo(Student,{onDelete: 'CASCADE',foreignKey:'courseID'});





const models = {
  User,
  Admin,
  Teacher,
  Student,
  Course,
  JTable,
};

sequelize.models=models;
db.sequelize=sequelize;
db.Sequelize=Sequelize;

module.exports = {db, models};