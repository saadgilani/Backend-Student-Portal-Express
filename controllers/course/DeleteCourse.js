const CourseService=require("../../service/CourseService");

module.exports= async function(req,res){
    const data= await CourseService.deleteCourse(req.query);
    res.send(data);
};

