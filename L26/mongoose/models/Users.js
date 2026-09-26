const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
    username:{
        type:String,
        required:true,
        trim:true
    },
    password:{
        type:String,
        required:true,
        trim:true
    },
    age:{
        type:Number,
        min:0
    },
    city:{
        type:String,
        trim:true
    },
    email:{
        type:String,
        trim:true,
        required:true
    }
})

const Users = mongoose.model("Users",userSchema);

module.exports = Users;