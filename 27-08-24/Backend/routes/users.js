var express = require('express');
var router = express.Router();
const usersControllers=require("../controllers/users");

/* GET users listing. */
router.get('/', usersControllers.index);
router.get('/contact',function(req,res,next)
{
  res.send('contact us from users')
})

router.post('/login',usersControllers.login);

router.post('/',usersControllers.createUser);
module.exports = router;
