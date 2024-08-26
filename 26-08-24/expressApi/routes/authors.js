var express=require('express');
var router=express.Router();
const Author=require("../models/authors");
const {body,validationResult}=require("express-validator");

router.post("/",[body("first_Name").isLength({min:3}).withMessage("Min should be 3"),body("last_Name").isLength({max:20}).withMessage("Max Length not exceed 20 charcaters"),async function(req,res,next){
    const errors=validationResult(req);
    if(errors.isEmpty()){
    let {first_Name,last_Name,dob,dod}=req.body;
    let authorOb=new Author({first_Name,last_Name,dob,dod});
    let result=await authorOb.save();
    res.json(result);
    }else{
        res.send(errors);
    }
}]);
router.get("/",async function(req,res,next){
    let results=await Author.find();
    res.json(results);
});

router.delete("/:id",async function(req,res,next){
    let iddelete=req.params.id;
    let result=await Author.findByIdAndDelete(iddelete);
    res.json(result);
});

router.put("/:id",async function(req,res,next){
    let {dob}=req.body;
    let result=await Author.findByIdAndUpdate(req.params.id,{dob});
    res.json(result);
})
module.exports=router;
