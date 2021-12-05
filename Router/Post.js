const express=require("express");
const Router=express.Router();
const validToken=require("../Middleware/Auth")
Router.post("/",validToken,(req,res)=>{
    console.log("here")
})

module.exports=Router