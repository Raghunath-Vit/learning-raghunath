const Category=require("../models/category");
exports.createCategory=async function(req,res){
    let name=req.body.name;
    let description=req.body.description;
    var categoryOb=new Category({
        name,description,
    });
   
    try{
        let result=await categoryOb.save();
        res.json(result);
    }
    catch(error)
    {
        res.json(error);
    }
};

exports.getCategory= async function(req,res){
   let result=await Category.find();
   res.json(result);
}