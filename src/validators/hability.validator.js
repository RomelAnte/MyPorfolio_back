const Joi = require("joi");

const habilitySchema = Joi.object({
  name: Joi.string().min(3).max(50).required(),
  percentage: Joi.number().min(0).max(100).required(),
  ico: Joi.string().min(3).max(50).required(),
  experience_years: Joi.number().min(0).required(),
  description: Joi.string().max(255).optional()
});

module.exports = habilitySchema;
