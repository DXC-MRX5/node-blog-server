const mongoose = require("mongoose");
mongoose.set('strictQuery', true);
const url = "mongodb+srv://deb2020lancing:82ayan39@blog-database.6yydw6a.mongodb.net/?retryWrites=true&w=majority";

const connectDb = async()=>{
    try{
        const client = await mongoose.connect(url);
        console.log("connected to mongoDb successfully");
        return client;
    }
    catch(err){
        console.log("error in connecting with MongoDb", err);
    }
}

module.exports=connectDb;