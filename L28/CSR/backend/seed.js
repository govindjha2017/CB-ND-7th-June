const mongoose = require("mongoose");
const Student = require("./models/student");

mongoose.connect("mongodb://localhost:27017/CBND7thJuneCSR")
    .then(()=>{console.log("DB conected!")})
    .catch(()=>{console.log("DB not conected")})

Student.create([
    {
        name:'rahul',
        email:'rahul@gmail.com',
        course:'MERN'
    },
    {
        name:'ajay',
        email:'ajay@gmail.com',
        course:'JAVA'
    },
    {
        name:'rohit',
        email:'rohit@gmail.com',
        course:'C++'
    }
]).then(()=>{console.log("Seeded!")})