const express = require("express");
const app = express();
const session = require("express-session");

app.use(session({
//   name:'loginInfo',
  secret: 'keyboard cat',
  resave: false,
  saveUninitialized: true,
}))

app.get("/",(req,res)=>{
    console.log(req.session);
    res.send("Home page");
})

app.get('/login',(req,res)=>{
    req.session.user=1234;

    res.send("login page")
})

const PORT = 4000;
app.listen(PORT,()=>{
    console.log('server run at port',PORT)
})