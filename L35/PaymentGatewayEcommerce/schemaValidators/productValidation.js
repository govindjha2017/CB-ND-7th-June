const Joi = require('joi');

const productSchema = Joi.object({
    name: Joi.string().required(),
    image: Joi.string().required(),
    price: Joi.number().required().min(0),
    desc:Joi.string(),
})


const reviewSchema = Joi.object({
    rating:Joi.number().required().min(0).max(5),
    comment:Joi.string()
})

module.exports = {productSchema,reviewSchema}