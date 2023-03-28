const {models} =require("./definitions");
const {Op}= require('sequelize');

module.exports={
    createCourse: async function(body){
        const result=await models.Course.create(body);
        return result;
    },
     getAllCourse: async function(){
         const data= await models.Course.findAll();
         return data;
     },
     getCourseByID: async function(query){
         const data=await models.Course.findAll({
             where: {
                 id: query.id,
             },
         });
 
         return data;
     },
     updateCourse: async function(body){
         const data=await models.Course.update(
             {...body},
             {
             where: {
                 id: body.id,
             }
         }
         )
     },
     deleteCourse: async function(query){
         const data= await models.Course.destroy({
             where: {
                 id: query.id
             },
             force: true
         });
         if(data){
             return "Success"
         }
         return 'Fail';
        
     }, 
}