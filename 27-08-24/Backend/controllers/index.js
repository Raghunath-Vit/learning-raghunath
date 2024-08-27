exports.getIndex=function(req, res, next) {
    res.render('index', { title: 'Express' });
  };

exports.getContact=function(req,res,next){
    res.send('index',{title:'contact'})
  };
  