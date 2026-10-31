const {productSchema,reviewSchema} = require("../schemaValidators/productValidation");

const validateProduct = async (req,res,next)=>{
    try {
        const value = await productSchema.validateAsync(req.body);
        next()
    } catch (err) {
        // console.log(err.details[0].message);
        // res.render("error",{msg:err.details[0].message})
        req.flash("error",err.details[0].message);
        res.redirect(req.get("Referrer") || "/")
    }
}

const validateReview = async (req,res,next)=>{
    try {
        const value = await reviewSchema.validateAsync(req.body);
        next()
    } catch (err) {
        // console.log(err);
         res.render("error",{msg:err.details[0].message});
         req.flash("error",err.details[0].message);
        res.redirect(req.get("Referrer") || "/")
    }
}

module.exports = {
    validateProduct,validateReview
}