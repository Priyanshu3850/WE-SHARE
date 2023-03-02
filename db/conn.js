const mongoose=require("mongoose")
require('dotenv').config();


mongoose.connect(process.env.MONGO_URL,{useNewUrlParser:true,useUnifiedTopology:true}).then(()=>{
          console.log("connection successful");

}).catch((e)=>{
          console.log(e);
})

