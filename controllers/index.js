module.exports={
    //user Code
    CreateUser: require('./Users/users/CreateUser'),
    GetAllUser: require('./Users/users/GetAllUsers'),

    //studentCode
   CreateStudent: require('./Users/students/CreateStudent'),
   GetAllStudents: require('./Users/students/GetAllStudents'),
   DeleteStudent: require('./Users/students/DeleteStudent'),
   UpdateStudent: require('./Users/students/UpdateStudent'),
   Login: require('./Users/students/Login'),

   //Teacher Code
   CreateTeacher: require('./Users/teachers/CreateTeacher'),
   GetAllTeachers:require('./Users/teachers/GetAllTeachers'),
   DeleteTeacher: require('./Users/teachers/DeleteTeacher'),
   UpdateTeacher: require('./Users/teachers/UpdateTeacher'),


   //Course Code
   CreateCourse: require('./course/CreateCourse'),
   GetAllCourse:require('./course/GetAllCourses'),
   DeleteCourse: require('./course/DeleteCourse'),
   UpdateCourse: require('./course/UpdateCourse'),
};