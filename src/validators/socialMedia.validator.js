const Joi = require('joi');

const socialMediaSchema = Joi.object({
    platform: Joi.string().min(3).max(50).required(),
    url: Joi.string().uri().max(255).required(),
});

module.exports = socialMediaSchema;