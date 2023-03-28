const {models} =require("../../models/definitions");
const {createUser}=require('./UserModel');
const {Op}= require('sequelize');

module.exports={
    createTeacher: async function(body){
        var userData={
            firstName: body.firstName,
            lastName: body.lastName,
            email:body.email,
            phoneNumber:body.phoneNumber,
            password:body.password
        }

        var teacherData={
            department: body.department,
            officeLocation: body.officeLocation,
            officeStart: body.officeStart,
            officeEnd:body.officeEnd,
        }

        const user=await createUser(userData);

        teacherData={...teacherData,userID:user.id};
    
        const result=await models.Teacher.create(teacherData);
        return result;
    },
    getAllTeachers: async function(){
        const result=await models.Teacher.findAll({
            include:{
                model:models.User
            }
        });
        return result;
    },
    deleteTeacher: async function(query){
        try {
            // Find the Teacher record to delete
            const Teacher = await models.Teacher.findByPk(query.id);
        
            // If the Teacher record exists, delete it along with the associated user record
            if (Teacher) {
              const user = await Teacher.getUser(); // Get the associated user record
              await Teacher.destroy({ force: true }); // Delete the Teacher record
              await user.destroy(); // Delete the associated user record
              return 'Success';
            } else {
              return 'Fail';
            }
          } catch (error) {
            console.error(error);
            return 'Error';
          }
    },
    updateTeacher: async function(data) {
        try {
          // Find the Teacher record to update
          const Teacher = await models.Teacher.findByPk(data.id);
      
          // If the Teacher record exists, update it along with the associated user record
          if (Teacher) {
            const user = await Teacher.getUser(); // Get the associated user record
    
            await models.Teacher.update(  {...data},
                {
                where: {
                    id: data.id,
                }
            }); // Update the Teacher record with the new data
         
            await models.User.update(  data,
                {
                where: {
                    id: user.id,
                }
            }); // Update the associated user record with the new data
            return 'Success';
          } else {
            return 'Fail';
          }
        } catch (error) {
          console.error(error);
          return 'Error';
        }
      }
}