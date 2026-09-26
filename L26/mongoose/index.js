const express = require("express");
const app = express();
const mongoose = require("mongoose");
const Users = require("./models/Users");

mongoose.connect("mongodb://localhost:27017/CBND7thJune")
    .then(()=>{
        console.log("DB conteced!")
    })
    .catch(()=>{
        console.log("DB Not Conected!")
    })

// const userSchema = new mongoose.Schema({
//     username:String,
//     password:String,
//     age:Number,
//     city:String,
//     email:String
// })

// const userSchema = new mongoose.Schema({
//     username:{
//         type:String,
//         required:true,
//         trim:true
//     },
//     password:{
//         type:String,
//         required:true,
//         trim:true
//     },
//     age:{
//         type:Number,
//         min:0
//     },
//     city:{
//         type:String,
//         trim:true
//     },
//     email:{
//         type:String,
//         trim:true,
//         required:true
//     }
// })

// const Users = mongoose.model("Users",userSchema);

/////////////CREATE/////////////////////

// Users.create({
//     username:"rahul",
//     password:'rahul@123',
//     age:31,
//     city:"Delhi",
//     email:'rahul@gmail.com'
// }).then(()=>{console.log('Document created!')})


// Users.create([
//     {
//         username:'ajay',
//         password:'ajay@123',
//         city:"Pune",
//         age:21,
//         email:'ajay@gmail.com'
//     },
//     {
//         username:'vinay',
//         password:'vinay@123',
//         city:"Pune",
//         age:51,
//         email:'vinay@gmail.com'
//     },
//     {
//         username:'rohit',
//         password:'rohit@123',
//         city:"Mumbai",
//         age:41,
//         email:'rohit@gmail.com'
//     },
// ]).then(()=>{console.log('Document created!')})


//////////////FIND/////////////////

// Users.find({})
//     .then((data)=>{
//         console.log(data)
//     })

// Users.findOne({})
//     .then((data)=>{
//         console.log(data)
//     })

// Users.findOne({city:'Pune'})
//     .then((data)=>{
//         console.log(data)
//     })

// Users.find({city:'Pune'})
//     .then((data)=>{
//         console.log(data)
//     })

// Users.findById('6ab792b594121080df6e5b58')
//     .then((data)=>{
//         console.log(data);
//     })

//////// UPDATE ///////////////////

// Users.updateOne({username:'ajay'},{password:'ajay#@$1234',age:25})
//     .then(()=>{
//         console.log('Updated!!')
//     })

// Users.updateMany({},{city:"Delhi"})
//     .then(()=>{
//         console.log('Updated!!')
//     })

// Users.findByIdAndUpdate('6ab792b594121080df6e5b57',{city:"Mumbai",age:21})
//     .then(()=>{console.log('updated')})

// Users.findByIdAndDelete('6ab79188db8fda7c9953ea38')
//     .then(()=>{console.log("Deleted!")})

// Users.deleteOne({username:'ajay'})
//     .then(()=>{console.log("Deleted!")})

Users.deleteMany({})
    .then(()=>{console.log("Deleted!")})

const PORT = 4000;
app.listen(PORT,()=>{
    console.log("server run at port",PORT);
});