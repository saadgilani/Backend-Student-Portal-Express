const bcrypt=require("bcrypt");
const teacherModel=require("../models/UserModels/TeacherModel");


module.exports={
    createTeacher: async function(body){
        const data= await teacherModel.createTeacher(body);
        return data;
    },
    getAllTeachers: async function(){
        const data= await teacherModel.getAllTeachers();
        return data;
    },
    deleteTeacher: async function(query){
        const data=await teacherModel.deleteTeacher(query);
        return data;
    },
    updateTeacher: async function(body){
        const data=await teacherModel.updateTeacher(body);
        return data;
    }
};