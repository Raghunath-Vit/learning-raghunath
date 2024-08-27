const Author=require("../models/authors");
const {body,validationResult}=require("express-validator");
const auth=require("../middlewares/auth");

exports.createAuthor=[body("first_Name").isLength({min:3}).withMessage("Min should be 3"),body("last_Name").isLength({max:20}).withMessage("Max Length not exceed 20 charcaters"),async function(req,res,next){
    const errors=validationResult(req);
    if(errors.isEmpty()){
    let {first_Name,last_Name,dob,dod}=req.body;
    let authorOb=new Author({first_Name,last_Name,dob,dod});
    let result=await authorOb.save();
    res.json(result);
    }else{
        res.send(errors);
    }
}];


exports.getAuthor=[auth,async function(req,res,next){
    let results=await Author.find();
    res.json(results);
},];


exports.deleteAuthor=async function(req,res,next){
    let iddelete=req.params.id;
    let result=await Author.findByIdAndDelete(iddelete);
    res.json(result);
};

exports.putAuthor=async function(req,res,next){
    let {dob}=req.body;
    let result=await Author.findByIdAndUpdate(req.params.id,{dob});
    res.json(result);
};

exports.patchAuthor= async (req, res) => {
    try {
      const updatedUser = await User.findByIdAndUpdate(req.params.id, req.body, { new: true, runValidators: true });
      if (!updatedUser) return res.status(404).json({ message: 'User not found' });
      res.json(updatedUser);
    } catch (error) {
      res.status(400).json({ message: error.message });
    }
  };