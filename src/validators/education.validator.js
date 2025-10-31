const Joi = require('joi');

const educationSchema = Joi.object({
    institution: Joi.string().min(2).max(255).required(),
    degree: Joi.string().min(2).max(255).required(),
    start_date: Joi.date().less('now').required(),
    end_date: Joi.date().greater(Joi.ref('start_date')).allow(null),
});

module.exports = educationSchema;