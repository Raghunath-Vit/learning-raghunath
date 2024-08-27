var express = require('express');

var router = express.Router();
const indexControllers=require("../controllers/index");

/* GET home page. */
router.get('/', indexControllers.getIndex);

router.get("/contact",indexControllers.getContact)


module.exports = router;
