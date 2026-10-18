const express = require('express');
const router = express.Router();
const {A,B} = require("../controllers/product");
const Products = require("../models/Products");
const isAuth = require("../middleware/isAuth");
const isSeller = require("../middleware/isSeller");
const {validateProduct} = require("../middleware/validation")

router.get('/',A)

router.get('/product/new',isAuth,isSeller,B)

router.post('/products',isAuth,isSeller,validateProduct,async(req,res)=>{
    const {name,image,price,desc} = req.body;
    
    await Products.create({name,image,price,desc});
    req.flash("success","Product created successdully!");
    res.redirect('/')
})

router.get('/products/:productId/edit',isAuth,isSeller,async (req,res)=>{
    const {productId} = req.params;
    // const product = await Products.findOne({_id:productId})
    const product = await Products.findById(productId)
    res.render('edit',{product})
})

router.put('/products/:productId',isAuth,isSeller,validateProduct,async (req,res)=>{
    const {productId} = req.params;
    const {name,image,price,desc} = req.body;
    await Products.findByIdAndUpdate(productId,{name,image,price,desc});
    req.flash("success","Product updated successdully!")
    res.redirect('/')
})

router.delete('/products/:productId',isAuth,isSeller,async (req,res)=>{
    const {productId} = req.params;
    await Products.findByIdAndDelete(productId);
    req.flash("success","Product Deleted successdully!")
    res.redirect('/')
})

router.get('/products/:productId',async (req,res)=>{
    const {productId} = req.params;
    let product = await Products.findById(productId).populate("reviews");

    res.send(product);
    // console.log(product);

    // res.render('show',{product})
})

module.exports = router;