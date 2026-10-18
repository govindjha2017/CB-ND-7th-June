const Products = require("../models/Products")
let A = async (req,res)=>{
    let productsData = await Products.find({})
    // res.render('home',{productsData:productsData})
    res.render('home',{productsData})
}

let B = (req,res)=>{
    res.render('new')
}

module.exports = {A,B}