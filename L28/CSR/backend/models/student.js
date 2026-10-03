const mongoose = require("mongoose");

const studentSchema = new mongoose.Schema({
    name:{
        type:String,
        required:true,
        trim:true
    },
    email:{
        type:String,
        required:true,
        trim:true
    },
    course:{
        type:String,
        trim:true
    },
},{timestamps:true});

const Student = mongoose.model("Student",studentSchema);
module.exports = Student;