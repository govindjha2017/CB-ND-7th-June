const express = require("express");
const router = express.Router();

router.get('/cart/add/:productId',(req,res)=>{
    const {productId} = req.params;
    const userId = req.user._id;



})


module.exports = router;