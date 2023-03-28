const userService=require("../../../service/UserService");

module.exports= async function(req,res){
    const data= await userService.getAllUser();
    res.send(data);
};

