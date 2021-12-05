const express=require("express");
require("dotenv").config()
const app=express();
const port=process.env.PORT || 8000;
require("./Models/DB_connection")
const cors=require("cors");
app.use(cors());
app.use(express.json())
//user routes
const usersRoute=require("./Router/User")
app.use("/api/user",usersRoute)
//post routes
const postRoute=require("./Router/Post");
app.use("/api/posts",postRoute)
app.listen(port,()=>{
    console.log("server started at "+port);
})