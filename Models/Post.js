const mongoose=require("mongoose");
const postSchema=new mongoose.Schema({
    thought:{
        type:String,
        required:true
    },
    username:{
        type:String,
        required:true
    }
},{
    timestamps:true
})

module.exports=mongoose.model("Posts",postSchema)