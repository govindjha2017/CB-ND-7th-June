const express = require("express");
const app = express();
const users = require("./data/users");
const methodOverride = require('method-override');

app.use(methodOverride('_method'));

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

app.get("/users/:id",(req,res)=>{
    try{
        const {id} = req.params;
        let user = users.find(user=> user.id==id);
        if(user){
            res.render("show",{user})
        }else{
            res.render('error',{msg:'user not found'})
        }
    }
    catch{
        res.status(500).render('error',{msg:"Internl server error"});
    }
    
})

app.get('/users/:id/edit',(req,res)=>{
    // console.log(req.params);
    const {id} = req.params;
    let user = users.find(user=> user.id==id);

    res.render('edit',{user})
})

app.put('/users/:id',(req,res)=>{
    // console.log(req.body);
    // console.log(req.params);
    const {username,password,age,city} = req.body;
    const {id} = req.params;
    let user = users.find(user=> user.id==id);
    user.username=username;
    user.password=password;
    user.age=age;
    user.city=city;

    res.redirect('/users');
})

app.delete("/users/:id",(req,res)=>{
    try{
        const {id} = req.params;
        let user = users.find(user=> user.id==id);
        let ind = users.indexOf(user);
        users.splice(ind,1);
        res.redirect("/users");
    }
    catch{
        res.status(500).render('error',{msg:"Internl server error"});
    }
})

app.get(/.*/,(req,res)=>{
    res.send("404 page not found")
})

const PORT=5000;
app.listen(PORT,()=>{
    console.log("server run at port:",PORT)
})