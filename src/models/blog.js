const mongoose = require("mongoose");
const validator = require("validator");
const blogSchema = new mongoose.Schema({
    discription:{
        type:String,
        //required:true,
        //minlength:3,
        
    },
    
    creator:{
        type:String
        //required:true,
            //unique:[true,"email already present"],
           

    },
        
    comments:{
        type:String
        //required:true,


    }
})

const Blog= new mongoose.model("Blog",blogSchema);

module.exports= Blog;
