const CourseService=require("../../service/CourseService");

module.exports= async function(req,res){
    const data= await CourseService.createCourse(req.body);
    res.send(data);
};

