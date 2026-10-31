const express = require("express");
const router = express.Router();
const User = require("../models/users");
const isAuth = require("../middleware/isAuth");

router.get('/cart/add/:productId',isAuth,async (req,res)=>{
    const {productId} = req.params;
    const userId = req.user?._id;

    const user = await User.findById(userId);

     let isProductExist = user.cart.find((item)=> item.productId==productId);

    if(isProductExist){
        // user.cart[ind].quantity++
        isProductExist.quantity++;
    }else{
        user.cart.push({productId})
     }
     user.save();
     req.flash("success","product added to cart!")
     res.redirect(req.get("Referrer"))
})

router.get("/users/cart",isAuth,async(req,res)=>{
    const userId = req.user?._id;
    const user = await User.findById(userId).populate('cart.productId');

    let userCart = user.cart;
    let totalPrice=0;

    for(let cartItem of userCart){
       totalPrice += cartItem.productId.price*cartItem.quantity
    }

    res.render('cart',{userCart,totalPrice})
})


router.get("/cart/minus/:productId",async (req,res)=>{
    const {productId} = req.params;
    const userId = req.user?._id;
    const user = await User.findById(userId);
    
    let product = user.cart.find((item)=> item.productId==productId);

    if(product){
        if(product.quantity>1){
            product.quantity--;
        }else{
            let ind = user.cart.indexOf(product);
            user.cart.splice(ind,1)
        }
    }
    user.save();
    res.redirect(req.get("Referrer"));
})

module.exports = router;