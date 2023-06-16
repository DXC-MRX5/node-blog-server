const mongoose = require('mongoose');

const articleSchema = new mongoose.Schema({
    ind:Number,
    cat:String,
    title:String,
    genre:String,
    description:String,
    derector:String,
    cast:String,
    date:String,
    imdb:String,
    poster:String,
    author:String,
    gen:String,
    rating:Number,
    heading:String,
    process:String,
    subheading:String,
    show:String,
    isTop:String,
    link:String,
});

const articleModel=mongoose.model("articles", articleSchema);

module.exports=articleModel;
