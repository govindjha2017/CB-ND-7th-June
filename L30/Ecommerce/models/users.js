const mongoose = require("mongoose");
const passportLocalMongoose = require("passport-local-mongoose").default;
const userSchema = new mongoose.Schema({
    // username
    // password 
    // email 
    // role
    email:{
        type:String,
        required:true,
        trim:true
    },
    role:{
        type:String,
        required:true,
        trim:true
    },
    cart:[
        
    ]
});

userSchema.plugin(passportLocalMongoose);
const User = mongoose.model("User",userSchema);

module.exports = User;