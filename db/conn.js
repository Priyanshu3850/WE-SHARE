const mongoose=require("mongoose")
require('dotenv').config();


mongoose.connect("mongodb://localhost:27017/file_storage",{useNewUrlParser:true,useUnifiedTopology:true}).then(()=>{
          console.log("connection successful");

}).catch((e)=>{
          console.log(e);
})

