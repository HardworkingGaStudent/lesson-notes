const Joi = require('joi')

const createProductValidator = Joi.object({
    name: Joi.string().min(3).required(),
    img: Joi.string().required(),
    price: Joi.number().min(0).required()
})

const updateProductValidator = ""

module.exports = createProductValidator
