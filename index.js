const express = require("express");
const dataRouter = require ("./routes/data");
const cors = require("cors");
const dotenv = require("dotenv").config();
const port = process.env.PORT;
const connectDb = require("./config/mongoose");

const app=express();
app.use(cors({origin:"*"}));
app.use(express.json());

app.get("/", (req, res)=>{
    console.log('Api is workiing Fine!');
    res.json({message:"You are connected to theSiren blog rest api HomePage !"})
});
app.use("/api/blog", dataRouter);

app.listen(port, async ()=>{
    try{
        await connectDb();
        console.log("server is connected to the port "+port);
    }
    catch(err){
        console.log("error in running server", err);
    }
})