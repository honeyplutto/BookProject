const Joi = require('@hapi/joi');

const registrationSchema = Joi.object({
    name: Joi.string().min(3).required(),
    email: Joi.string().email().required(),
    password: Joi.string().min(3).required(),
    confirmPassword: Joi.ref('password')
}) 

module.exports = {
    registrationSchema
}

