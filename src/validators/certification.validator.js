const Joi = require('joi');

const certificationSchema = Joi.object({
    name: Joi.string().min(3).max(100).required(),
    institution: Joi.string().min(3).max(100).required(),
    date_obtained: Joi.date().required(),
    credential_url: Joi.string().max(100).optional().allow(null),
});

module.exports = certificationSchema;