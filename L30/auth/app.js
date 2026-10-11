const express = require("express");
const app = express();
const mongoose = require("mongoose");
const User = require("./models/user");
const bcrypt = require("bcrypt");
const session = require('express-session');

app.set("view engine","ejs");
app.use(express.urlencoded({extended:true}));

app.use(session({
  secret: 'keyboard cat',
  resave: false,
  saveUninitialized: true,
  cookie:{
    maxAge: 2*60*1000,
  }
}))

mongoose.connect('mongodb://localhost:27017/CBND-AUTH')
    .then(()=>{console.log('DB conected!')})
    .catch(()=>{console.log("DB not conected!")})

app.get("/",(req,res)=>{
    res.render("home")
})

app.get("/signup",(req,res)=>{
    res.render("signup")
})

app.post("/signup",async (req,res)=>{
    const {username,password,email} = req.body;

    let user = await User.findOne({username})

    if(user){
        res.send("username allready exist")
    }else{
        // await User.create({username,password,email});
        let saltRound = 10;
        const hashPassword = await bcrypt.hash(password,saltRound)
        await User.create({username,password:hashPassword,email});
        return res.redirect('/login')
    }
})

app.get('/login',(req,res)=>{
    res.render("login")
})

app.post('/login',async (req,res)=>{
    const {username,password} = req.body;
    let user = await User.findOne({username})
    if(!user){
        res.send("user not exist")
    }else{
       let bool = await bcrypt.compare(password,user.password)
       if(bool){
          // password verify
          //session create
          req.session.user=user;
          res.redirect("/")
       }else{
        res.send("password incorrect")
       }
    }
})

let IsAuth = (req,res,next)=>{
    if(req.session.user){
        next()
    }else{
        res.redirect("/login")
    }
    
}

app.get("/payment",IsAuth,(req,res)=>{
    res.render("payment")
})

const PORT = 5000;
app.listen(PORT,()=>{
    console.log("server run at port",PORT);
})