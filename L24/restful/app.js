const express = require("express");
const app = express();
const users = require("./data/users");

app.set("view engine","ejs");
app.use(express.urlencoded({extended:true}))

app.get('/',(req,res)=>{
    res.render("home")
})

app.get("/users",(req,res)=>{

    res.render('index',{users})
})

app.get('/user/new',(req,res)=>{
    res.render('new')
})

app.post("/users",(req,res)=>{
    const {username,password,age,city} = req.body;
    console.log(username,password,age,city);

    let id= users[users.length-1].id+1;

    users.push({id,username,password,age,city})

    res.redirect("/users")
})

const PORT=5000;
app.listen(PORT,()=>{
    console.log("server run at port:",PORT)
})