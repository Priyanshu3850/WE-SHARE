const express=require("express");
const multer = require("multer");
const File = require("../models/File");
const route=express.Router()
// const bcrypt=require("bcrypt");


const bodyparser = require('body-parser')

route.use(bodyparser.urlencoded({ extended: true}));
//in order to get data use this line otherwise it will show undefined
route.use(express.urlencoded({extended:true}))



const upload=multer({ dest:"uploads"})



route.get("/",(req,res)=>{
          res.render("index");
})


route.post("/upload",upload.single("file"),async(req,res)=>{
           const filedata={
                    path:req.file.path,
                    originalName:req.file.originalname,
          }
           if(req.body.password !=null && req.body.password !=""){
                    filedata.password=req.body.password;
           }

           const file= await File.create(filedata);
          //  const file_name=/validate/{{filename}}
           res.render("download",{

                    filelink: `${req.headers.origin}/file/${file.id}`,
           })
;
})

// route.get("/:filename",async(req,res )=>{
//           console.log(req.params.filename)
//           const dfile=await File.find({originalName:req.params.filename});
//           console.log(dfile);
//           if (dfile.password !=null) {
//                     console.log("check1")
//                     if (dfile.password==checkpassword) {
//                               console.log("check3")
//                               res.render("download",{
//                                         filelink: `${req.headers.origin}/file/${file.id}`,
//                                         validate:true,
//                               })
//                               console.log("check4")
                              
//                     }
//           }
// })


// route.post("/:filename",async(req,res)=>{
//           console.log(req.params.filename)
//           const dfile=await File.find({originalName:req.params.filename});
//           console.log("check")
//           console.log(dfile.password);
//           if (dfile.password !=null) {
//                     console.log("check1")
//                     if (dfile.password==checkpassword) {
//                               res.render("download",{
//                                         filelink: `${req.headers.origin}/file/${file.id}`,
//                                         validate:true,
//                               })
                              
//                     }
//           }else{
//                     res.send("fjkvhjf")
//           }
// })


route.get("/file/:id",handel)
route.post("/file/:id",handel)

async function handel(req,res){
          const dfile=await File.findById(req.params.id);
          console.log(req.params.password)
          console.log(dfile.password)
          if(dfile.password !=null){
                    if(req.body.password==null){

                              console.log("check1")
                              res.render("password");
                              return
                    }
          }
          if(req.body.password != dfile.password){
                    console.log("check2")
                    res.render("index",{error:true})
                    return
          }

          dfile.downloadCount++;
          await dfile.save();
          console.log(dfile.downloadCount);
          res.download(dfile.path,dfile.originalName);
}




 
module.exports=route;

//mongodb+srv://priyanshuair3850:<Manu@3850>@cluster0.zxskhh8.mongodb.net/test