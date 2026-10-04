const express = require("express");
const router = express.Router();
const Student = require("../models/student");

router.get("/students",async (req,res)=>{
    const data = await Student.find({})
    res.status(200).json({msg:"all students data",data})
})

router.delete("/student/:id",async (req,res)=>{
    const {id} = req.params;
    await Student.findByIdAndDelete(id);

    res.status(200).json({msg:"student delted!"})
})

router.post('/students',async (req,res)=>{
    console.log("hello")
    const {name,email,course} = req.body;
     
    await Student.create({name,email,course});
    res.status(200).json({msg:"student created"})
})

router.get("/students/:id",async (req,res)=>{
    const {id} = req.params;
    const student = await Student.findById(id);
    res.status(200).json({msg:"student data",student})
})

router.put('/students/:id',async (req,res)=>{
    const {id} = req.params;
    const {name,email,course} = req.body;
    await Student.findByIdAndUpdate(id,{name,email,course});
    res.status(200).json({msg:'student updated!'})
})

module.exports = router;