const Joi = require('joi');

const userSchema = Joi.object({
    name: Joi.string().min(2).max(50).required(),
    last_name: Joi.string().min(2).max(50).required(),
    email: Joi.string().email().max(100).required(),
    password: Joi.string().min(6).max(255).required(),
    description: Joi.string().max(500).optional().allow(null, ''),
    profile_image: Joi.string().uri().max(255).optional().allow(null, ''),
});

module.exports = userSchema;