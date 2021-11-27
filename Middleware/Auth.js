const jwt=require("jsonwebtoken")
const validToken=(req,res,next)=>{
    const bearerHeader=req.bearer['authorization'];
    console.log(bearerHeader)
}
module.exports=validToken;