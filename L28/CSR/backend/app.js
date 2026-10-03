const express = require("express");
const app = express();
const cors = require("cors");
const mongoose = require("mongoose");

// app.use(cors({origin: 'http://example.com'}))

// app.use(cors({origin:'http://127.0.0.1:5500'}))

app.use(cors());
app.use(express.json())

mongoose.connect("mongodb://localhost:27017/CBND7thJuneCSR")
    .then(()=>{console.log("DB conected!")})
    .catch(()=>{console.log("DB not conected")})


// routes

app.get("/",(req,res)=>{
    res.json({msg:"working fine!"})
})

const studentRoutes = require("./routes/student");
app.use(studentRoutes);



const PORT = 5000;
app.listen(PORT,()=>{
    console.log("server listen at port",PORT);
})