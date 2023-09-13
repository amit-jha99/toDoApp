const express=require("express");
const app=express();

//load config from env file
require("dotenv").config();
const PORT =process.env.PORT || 4000;

//middleware to parse json request body

app.use(express.json());


//import routes for TODO API

const todoRoutes= require("./routes/todo");

//mount the todo API routes
app.use("/api/v1",todoRoutes);

//starting server
app.listen(PORT,()=>{
    console.log(`server started successfully at ${PORT}`);
})

//connection to database

const dbConnect =require("./config/database");
dbConnect();

//deafult route
app.get("/",(req,res)=>{
    res.send(`<h1>This is HomePage of my website</h1>`);
})