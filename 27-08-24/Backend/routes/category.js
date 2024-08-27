var express=require('express');
var router=express.Router();
const categoryController=require("../controllers/category");

router.post("/",categoryController.createCategory);
router.get("/",categoryController.getCategory);

module.exports=router;