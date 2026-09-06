const express = require("express");
const app = express();
const path = require("path");

app.use(express.static(path.join(__dirname,"public")))

app.get("/",(req,res)=>{
    // res.send("Home page")
    let filePath = path.join(__dirname,"home.html")
    res.sendFile(filePath)
})

app.get("/about",(req,res)=>{
    let filePath = path.join(__dirname,"index.html")
    res.sendFile(filePath)
})

app.get("/contact",(req,res)=>{
    let filePath = path.join(__dirname,"contact.html")
    res.sendFile(filePath)
})

app.get('/products',()=>{
    data = {}

    res.sendFile(loc)
})


app.listen(5000,()=>{
    console.log("server run at port 5000")
})