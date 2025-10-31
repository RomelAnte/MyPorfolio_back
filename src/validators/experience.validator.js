const Joi = require('joi');

// Certification validation schema
const experienceSchema = Joi.object({
    company: Joi.string().min(2).max(100).required(),
    position: Joi.string().min(2).max(100).required(),
    start_date: Joi.date().required(),
    end_date: Joi.date().greater(Joi.ref('start_date')).optional().allow(null),
    responsibilities: Joi.string().max(100).optional().allow(null),
});

module.exports = experienceSchema;