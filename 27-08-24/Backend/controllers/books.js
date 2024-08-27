const Book=require("../models/books");
exports.createBook=async function(req,res,next){
    let title=req.body.title;
    let author=req.body.author;
    let summary=req.body.summary;
    let isbn=req.body.isbn;
    let category=req.body.category;

    var bookOb=new Book({
        title,author,summary,isbn,category,
    });
    // await bookOb.save(function(err){
    //     if(err)
    //     {
    //         res.send("unable to craete author");
    //     }
    //     else{
    //         res.json("Book Created");
    //     }
    // });
    try{
        let result=await bookOb.save();
        res.json(result);
    }
    catch(error)
    {
        res.json(error);
    }
};

exports.getBooksWithAuthors=async function(req,res)
{
    try{
    let result=await Book.find()
    .populate("author").populate("category")
    .exec();
    res.json(result);
    }
    catch(error)
    {
        res.json(error);
    }

};