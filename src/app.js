const express= require("express");
const bodyParser = require("body-parser")





const bodyparser = require("body-parser");
require("./db/conn");
const blog = require("./models/blog");

const app = express();
const port = process.env.PORT || 8000;

//create a new delivery details

//app.use(bodyparser.json());
app.use(express.urlencoded({extended:true}));
app.use(express.json());

app.post("/",function(req,res){
    console.log(req.body);
    let {discription,creator,comments}=req.body;
    const user = new blog({discription,creator,comments})

    
    blog.create(user);
    console.log(user);
    res.send("blog");

})

app.get("/",async(req,res)=>{
    try{
        const blogdata = await blog.find();
        res.send(blogdata);

    }catch(e){
        res.send(e);

    }

})
app.patch("//:id",async(req,res)=>{
    try{
        const _id = req.params.id;
        const updateblog = await blog.findByIdAndUpdate(_id, req.body );
        res.send(updateblog);
        new true;
            


    }catch(e){
        res.status(400).send(updateblog);

    }

})
app.delete("//:id",async(req,res)=>{
    try{
        const _id = req.params.id;
        //const updateblog = await blog.findByIdAndUpdate(_id, req.body );
        //res.send(updateblog);
        //new true;
      const deleteblog = await blog.findByIdAndDelete(req.params.id);
      if(!req.params.id){
          return res.statusCode(400).send();
      }
      res.send(deleteblog);


    }catch(e){
        res.status(500).send(e);

    }

})

    
app.listen(port,()=>{
    console.log(port);

})
