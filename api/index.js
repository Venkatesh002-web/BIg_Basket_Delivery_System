var express=require("express");
var cors=require("cors");
var mongoose=require("mongoose");

var bcrypt=require('bcryptjs');
var User=require('./models/User.js');
require('dotenv').config()

var app=express();
var bcryptSalt=bcrypt.genSaltSync(10);
app.use(express.json());


app.use(cors({
credentials:true,
origin:'http://localhost:5173',
}))




app.post('/register', async (req,res) =>{

var { name,
      email,
      password,
      Phone,
      Lat,
      Long,} =req.body;
try{
var userDoc= await User.create({
name,
email,
password:bcrypt.hashSync(password,bcryptSalt),

});
res.json(userDoc);
}catch(e){
res.status(422).json(e);
};
})

