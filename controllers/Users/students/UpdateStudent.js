const studentService=require("../../../service/StudentService");

module.exports= async function(req,res){
    const data= await studentService.updateStudent(req.body);
    res.send(data);
};

