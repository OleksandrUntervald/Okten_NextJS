import Joi from "joi";

const carValidator = Joi.object({
    brand: Joi.string()
        .pattern(/^[A-Za-z]{2,}$/) // <-- тільки літери, не менше 2
        .required()
        .messages({
            "string.pattern.base": "Brand must contain only letters (min 2 chars)",
            "string.empty": "Brand is required",}),
    price: Joi.number().min(1).max(99999999).required().messages({
        'number.min': "price can be greater than 1",
        'number.max': "price can be less than 99999999"
    }),
    year: Joi.number().min(1905).max(2025).required().messages({
        'number.min': "year can be greater than 1905",
        'number.max': "year can be less than 2025"
    })
})

export {
    carValidator
}