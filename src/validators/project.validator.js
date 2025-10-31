const Joi = require('joi');

const projectSchema = Joi.object({
    title: Joi.string().min(3).max(100).required(),
    description: Joi.string().min(10).required(),
    project_url: Joi.string().uri().optional().allow(null),
    repository_url: Joi.string().uri().optional().allow(null),
    image_url: Joi.string().uri().optional().allow(null),
});

module.exports = projectSchema;