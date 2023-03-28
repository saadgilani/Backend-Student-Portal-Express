const bcrypt=require("bcrypt");
const CourseModel=require("../models/CourseModel");


module.exports={
    createCourse: async function(body){
        const data= await CourseModel.createCourse(body);
        return data;
    },
    getAllCourses: async function(){
        const data= await CourseModel.getAllCourse();
        return data;
    },
    deleteCourse: async function(query){
        const data=await CourseModel.deleteCourse(query);
        return data;
    },
    updateCourse: async function(body){
        const data=await CourseModel.updateCourse(body);
        return data;
    }
};