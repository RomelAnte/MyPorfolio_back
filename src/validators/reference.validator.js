const Joi = require('joi');

const referenceSchema = Joi.object({
    name: Joi.string().min(3).max(100).required(),
    company: Joi.string().min(3).max(100).required(),
    position: Joi.string().min(3).max(100).required(),
    phone: Joi.string().min(7).max(10).optional().allow(null),
    email: Joi.string().email().required(),
});

module.exports = referenceSchema;
