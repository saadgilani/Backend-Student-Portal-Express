const teacherService=require("../../../service/TeacherService");

module.exports= async function(req,res){
    const data= await teacherService.deleteTeacher(req.query);
    res.send(data);
};

