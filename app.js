const express=require("express");
const app=express();
const hbs=require("hbs");
const multer=require("multer");
// const bcrypt=require("bcrypt");

//database
require("./db/conn");

const bodyparser = require('body-parser')

app.use(bodyparser.urlencoded({ extended: true }));
//in order to get data use this line otherwise it will show undefined
app.use(express.urlencoded({extended:true}))

const routes=require('./routes/index');

app.use(express.static('public'))
app.use("",routes);



app.set('view engine','hbs');
app.set("views","views");
hbs.registerPartials("views/partials")





const PORT=process.env.PORT || 3000;
app.listen(PORT,()=>{
    console.log("started done ");
}) 