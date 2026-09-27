const express = require('express');
const router = express.Router();
const {A,B} = require("../controllers/product")

router.get('/',A)

router.get('/product/new',B)

router.post('/products',(req,res)=>{
    const {name,image,price,desc} = req.body;
    
    Products.create({name,image,price,desc});

    res.redirect('/')
})

router.get('/products/:productId/edit',async (req,res)=>{
    const {productId} = req.params;
    // const product = await Products.findOne({_id:productId})
    const product = await Products.findById(productId)
    res.render('edit',{product})
})

router.put('/products/:productId',async (req,res)=>{
    const {productId} = req.params;
    const {name,image,price,desc} = req.body;
    await Products.findByIdAndUpdate(productId,{name,image,price,desc});
    res.redirect('/')
})

router.delete('/products/:productId',async (req,res)=>{
    const {productId} = req.params;
    await Products.findByIdAndDelete(productId);
    res.redirect('/')
})


module.exports = router;