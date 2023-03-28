var express = require('express');
var router = express.Router();
const jwtSecret = require ('../config.json');
const jwt = require ('jsonwebtoken');

async function authenticateToken(req,res,next) {
    const authHeader = req.headers['authorization']
    const token = authHeader && authHeader.split(' ')[1]
    if (token == null) return res.sendStatus(401)
    jwt.verify(token, jwtSecret.jwt.secret, (err, user) => {
      if (err) return res.sendStatus(403)
      req.user = user
      next()
    })
}

/* GET users listing. */

const {CreateStudent,GetAllStudents,DeleteStudent,UpdateStudent,Login}=require('../controllers');

router.post('/CreateStudent',CreateStudent);
router.get('/GetAllStudents',authenticateToken,GetAllStudents);
router.delete('/DeleteStudent',DeleteStudent);
router.put('/UpdateStudent',UpdateStudent);
router.post('/Login',Login);

module.exports = router;
