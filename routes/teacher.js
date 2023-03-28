
var express = require('express');
var router = express.Router();

/* GET users listing. */

const {CreateTeacher,GetAllTeachers,DeleteTeacher,UpdateTeacher}=require('../controllers');

router.post('/CreateTeacher',CreateTeacher);
router.get('/GetAllTeachers',GetAllTeachers);
router.delete('/DeleteTeacher',DeleteTeacher);
router.put('/UpdateTeacher',UpdateTeacher);


module.exports = router;
