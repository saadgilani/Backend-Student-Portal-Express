const bcrypt=require("bcrypt");
const userModel=require("../models/UserModels/UserModel");


module.exports={
    createUser: async function(body){
        let saltrounds=10
        body.password=await bcrypt.hashSync(body.password,saltrounds);
        const data= await userModel.createUser(body);
        return data;
    },
    getAllUser: async function(){
        const data= await userModel.getAllUser();
        return data;
    }
};