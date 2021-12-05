const jwt=require("jsonwebtoken");
require("dotenv").config()
const secretKey=process.env.secretKey
const validToken=(req,res,next)=>{
    const bearerHeader=req.headers['authorization'];
    const token=bearerHeader && bearerHeader.split(' ')[1];
    console.log(token)
    if(!token){
        return res.json({error:"User not logged in "});
    }
    jwt.verify(token,secretKey,(err,user)=>{
        if(err) console.log(err.TokenExpiredError)
        else
        next();
    })
}
module.exports=validToken;
// axios. get(api , { headers: {"Authorization" : `Bearer ${token}`} })
// . then(res => {
// console. log(res. ...
// . catch((error) => {
// console. log(error)