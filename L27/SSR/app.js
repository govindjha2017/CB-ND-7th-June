const express = require("express");
const app = express();
const mongoose = require('mongoose');
const ejsMate = require('ejs-mate');
const Products = require("./models/Products");
const methodOverride = require('method-override');

mongoose.connect('mongodb://localhost:27017/CBNDSSR')
    .then(()=>{console.log('DB conected!')})
    .catch(()=>{console.log('DB not conected!')})

app.use(methodOverride('_method'));

app.engine('ejs',ejsMate);
app.set('view engine','ejs');
app.use(express.urlencoded({extended:true}));

/////////////ROUTES////////////////
const productRoutes = require("./routes/productRoutes");
app.use(productRoutes);

// const authRoutes = require("./routes/auth");
// app.use(authRoutes);


const PORT = 4000;
app.listen(PORT,()=>{
    console.log('server run at port',PORT);
})