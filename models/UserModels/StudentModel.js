const {models} =require("../../models/definitions");
const {createUser}=require('./UserModel');
const {Op}= require('sequelize');
const jwt=require("jsonwebtoken");
const jwtSecret = require ('../../config.json');



let refreshTokens = []
let revokedTokens = new Set();
function generateAccessToken(user) {
    return jwt.sign(user, jwtSecret.jwt.secret, { expiresIn: '3000s' })
}

module.exports={
    createStudent: async function(body){
        var userData={
            firstName: body.firstName,
            lastName: body.lastName,
            email:body.email,
            phoneNumber:body.phoneNumber,
            password:body.password
        }

        var studentData={
            department: body.department,
            rollNumber: body.rollNumber,
            semester: body.semester,
            typeOfUser:body.typeOfUser,
        }

        const user=await createUser(userData);

        studentData={...studentData,userID:user.id};
    
        const result=await models.Student.create(studentData);
        return result;
    },
    getAllStudents: async function(){
        const result=await models.Student.findAll({
            include:{
                model:models.User
            }
        });
        return result;
    },
    deleteStudent: async function(query){
        try {
            // Find the student record to delete
            const student = await models.Student.findByPk(query.id);
        
            // If the student record exists, delete it along with the associated user record
            if (student) {
              const user = await student.getUser(); // Get the associated user record
              await student.destroy({ force: true }); // Delete the student record
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
    updateStudent: async function(data) {
        try {
          // Find the student record to update
          const student = await models.Student.findByPk(data.id);

          // If the student record exists, update it along with the associated user record
          if (student) {
            const user = await student.getUser(); // Get the associated user record
            await models.Student.update({...data},
                {
                where: {
                    id: data.id,
                }
            }); // Update the student record with the new data
            await models.User.update(data,
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
      },
      login: async function(body){
        console.log(body);
        let user = await models.User.findOne({
            where:{
                email:body.email
            }
        })
        user = user.dataValues;
        const accessToken = generateAccessToken(user)
        const token = jwt.sign(user, jwtSecret.jwt.secret)
        refreshTokens.push(token)
        return({accessToken: accessToken, refreshTokens:token})
       
    },
}