const mongoose=require("mongoose")
require('dotenv').config();


mongoose.connect(MONGO_URL,{useNewUrlParser:true,useUnifiedTopology:true}).then(()=>{
          console.log("connection successful");

}).catch((e)=>{
          console.log(e);
})

