const express = require("express");
const app = express();

app.set("view engine","ejs");


app.get('/',(req,res)=>{
    // res.send("working fine!")
    res.render("home")
})

app.get("/about",(req,res)=>{
    res.render("about")
})

app.get("/contact",(req,res)=>{
    res.render("contact")
})

const todosData = ['cricket','music','dance','code','java'];

let bool = true;

app.get("/todos",(req,res)=>{
    res.render('todos',{todosData,bool})
})


const PORT = 4000;
app.listen(PORT,()=>{
    console.log("server run at port",PORT)
})