const express = require("express");
const app = express();

const dns = require("dns");
dns.setServers(["8.8.8.8","8.8.4.4"])

require("dotenv").config();
const mongoose = require('mongoose');
const ejsMate = require('ejs-mate');
const Products = require("./models/Products");
const methodOverride = require('method-override');
const path = require("path");
const passport = require("passport");
const LocalStrategy = require("passport-local");
const User = require("./models/users");
const session = require('express-session');
const flash = require("connect-flash");

const coonectDB = require("./config/db");
coonectDB()

app.use(methodOverride('_method'));

app.engine('ejs',ejsMate);
app.set('view engine','ejs');
app.use(express.urlencoded({extended:true}));
app.use(express.static(path.join(__dirname,"public")));

app.use(session({
  secret: process.env.SESSION_SECRET,
  resave: false,
  saveUninitialized: true
}))

app.use(flash());

app.use(passport.initialize());
app.use(passport.session());
passport.use(new LocalStrategy(User.authenticate()));
passport.serializeUser(User.serializeUser());
passport.deserializeUser(User.deserializeUser());


app.use((req,res,next)=>{
    // console.log("HIII")
    res.locals.currUser = req.user;
    res.locals.success = req.flash("success");
    res.locals.error = req.flash("error");
    next();
})

/////////////ROUTES////////////////
const productRoutes = require("./routes/productRoutes");
app.use(productRoutes);

const reviewRoutes = require("./routes/review");
app.use(reviewRoutes);

const authRoutes = require("./routes/auth");
app.use(authRoutes);

const cartRoutes = require("./routes/cart");
app.use(cartRoutes);

const paymentRoutes = require("./routes/payment");
app.use(paymentRoutes);


const PORT = process.env.PORT;
app.listen(PORT,()=>{
    console.log('server run at port',PORT);
})