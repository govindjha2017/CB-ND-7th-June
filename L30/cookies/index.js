const express = require("express");
const app = express();
const cookieParser = require('cookie-parser');

app.use(cookieParser('asdf1234'));

app.get("/",(req,res)=>{
    res.send("Home page")
})

// app.get("/set-cookie",(req,res)=>{
//     res.cookie("x",1000);
//     res.cookie("mode","dark")
//     res.send("cookie set!")
// })

// app.get("/get-cookie",(req,res)=>{
//     console.log(req.cookies);

//     res.send("ok")
// })


// app.get("/store",(req,res)=>{
//     res.cookie("discount",5000);

//     res.send("Yo visited on store routes")
// })


// app.get('/buy',(req,res)=>{
//     let price = 20000;
//     let finalPrice ;
//     let {discount} = req.cookies
//     if(discount){
//        finalPrice = price-discount;
//     }else{
//         finalPrice=price;
//     }

//     res.send(`Total price = ${finalPrice}`);
// })


app.get("/store",(req,res)=>{
    res.cookie("discount",5000,{signed:true});

    res.send("Yo visited on store routes")
})


app.get('/buy',(req,res)=>{
    console.log(req.signedCookies);
    let price = 20000;
    let finalPrice ;
    let {discount} = req.signedCookies
    if(discount){
       finalPrice = price-discount;
    }else{
        finalPrice=price;
    }

    res.send(`Total price = ${finalPrice}`);
})

const PORT = 4000;
app.listen(PORT,()=>{
    console.log("server run at port",PORT)
})