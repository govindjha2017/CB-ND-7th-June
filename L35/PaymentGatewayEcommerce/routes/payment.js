const express = require("express");
const router = express.Router();
const User = require("../models/users");
const crypto = require("crypto");
const cashfree = require("../config/cashfree")

router.post('/payment/checkout',async (req,res)=>{

    try{
        const userId = req.user._id;
        const user = await User.findById(userId).populate('cart.productId')

        let userCart = user?.cart;
        let totalPrice=0;

        for(let cartItem of userCart){
            totalPrice += cartItem.productId.price*cartItem.quantity
        }

        if(totalPrice<=0){
            return res.status(400).render("error",{msg:'total price must be greater then 0'})
        }

        let order_id = "order_"+ crypto.randomUUID()

        console.log(order_id);

        var request = {
            "order_amount": totalPrice ,
            "order_currency": "INR",
            "order_id": order_id,
            "customer_details": {
                "customer_id": userId,
                "customer_phone": "9999999999"
            },
            "order_meta": {
                "return_url": `${process.env.BASE_URL}/payment/verify?order_id=${order_id}`
            }
        };
        let response = await cashfree.PGCreateOrder(request);
        console.log(response);

        res.render('payment/checkout',{paymentSessionId: response.data.payment_session_id})

    }catch(error){
        return res.status(400).render("error",{msg:error.message})
    }

})

router.get('/payment/verify',async (req,res)=>{
    const {order_id} = req.query;
    let response = await cashfree.PGFetchOrder(order_id);
    let order = response.data;
    console.log(order)
    if(order.order_status=="PAID"){
        //logic
        //user cart clear
        // orders model :- orderId , amount , items[] , staatus


        res.render("payment/success",{order})
    }else{
        res.render("payment/failure",{order})
    }
})

module.exports = router;