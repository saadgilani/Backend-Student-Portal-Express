const {models} =require("../../models/definitions");
const {Op}= require('sequelize');

module.exports={
    createUser: async function(body){
        const result=await models.User.create(body);
        return result;
    },
    getAllUser: async function(){
        const result=await models.User.findAll({
            attributes: {exclude: ['password']}
        });
        return result;
    }
}