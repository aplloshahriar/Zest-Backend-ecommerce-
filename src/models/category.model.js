const mongoose=require("mongoose");

const categorySchema= new mongoose.Schema({
        name:{
            type:String,
            required:true,
            unique:true,
        },
        createdAt:{
            type:Date,
            default:Date.now
        }
    })
    const Category= mongoose.model("Category",categorySchema);
    // export the Category
    module.exports=Category;
