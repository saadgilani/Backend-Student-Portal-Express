
var express = require('express');
var router = express.Router();

/* GET users listing. */

const {CreateUser,GetAllUser}=require('../controllers');

router.post('/CreateUser',CreateUser);
router.get('/GetAllUsers',GetAllUser);

module.exports = router;
