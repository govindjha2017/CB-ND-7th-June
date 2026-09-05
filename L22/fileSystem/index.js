const fs = require('fs');
const path = require("path");

// console.log(__dirname);

// let loc = path.join(__dirname,"temp.txt");
// console.log(loc);
// let data1 = "this is temp string data";

// fs.writeFile(loc,data1,(err)=>{
//     if(err){
//         console.log(err);
//     }else{
//         console.log("File written successfully")
//     }
// })


// let loc1 = path.join(__dirname,"data","abc.txt");
// let data2 = "Hello kaise ho"
// let data3 = "theek hu"

// fs.writeFile(loc1,data3,(err)=>{
//     if(err){
//         console.log(err);
//     }else{
//         console.log("File written successfully")
//     }
// })



// let loc2 = path.join(__dirname,"data","abc.txt");
// let data3 = "theek hu"

// fs.appendFile(loc2,data3,(err)=>{
//     if(err){
//         console.log(err);
//     }else{
//         console.log("File written successfully")
//     }
// })



let loc3 = path.join(__dirname,"data","abc.txt");

fs.readFile(loc3,{encoding:'utf-8'},(err,data)=>{
    if(err){
        console.log(err);
    }else{
        // console.log(data.toString());
        console.log(data);
    }
})