const studentService=require("../../../service/StudentService");

module.exports= async function(req,res){
    const data= await studentService.login(req.body);
    res.send(data);
};

