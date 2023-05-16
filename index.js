const express = require("express");
const dataRouter = require ("./routes/data");
const cors = require("cors");
const dotenv = require("dotenv").config();
const port = process.env.PORT;

const app=express();
app.use(cors({origin:"*"}));
app.use(express.json());

app.get("/", (req, res)=>{
    console.log('Api is workiing Fine!');
    res.json({message:"You are connected to theSiren blog rest api HomePage !"})
});
app.use("/api/blog", dataRouter);

app.listen(port, ()=>{
    console.log(`Server is connected to the port ${port}`);
})