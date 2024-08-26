var express = require('express');
var router = express.Router();

router.get('/', function(req, res, next) {
  res.send("Product Page");
});

router.get("/products/:id/:name",function(req,res,next){
  let id=req.params.id;
  let name=req.params.name;
  res.json({id,name});
})

router.post("/product",function(req,res,next){
    const {name,price}=req.body;
    res.json({name,price});
});

module.exports = router;
