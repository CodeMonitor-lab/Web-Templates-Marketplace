// modules/templates/template.validation.js

const Joi = require("joi");

/*
|--------------------------------------------------------------------------
| Create Template Validation
|--------------------------------------------------------------------------
*/

const createTemplateSchema = Joi.object({
  title: Joi.string().required(),
  slug: Joi.string().required(),
  description: Joi.string().required(),
  price: Joi.number().min(0).required(),
  thumbnail: Joi.string().uri().optional(),
  previewUrl: Joi.string().uri().optional(),
  category: Joi.string().required(),
  tags: Joi.array().items(Joi.string()).optional(),
  isPublished: Joi.boolean().optional(),
});

/*
|--------------------------------------------------------------------------
| Update Template Validation
|--------------------------------------------------------------------------
*/

const updateTemplateSchema = Joi.object({
  title: Joi.string().optional(),
  slug: Joi.string().optional(),
  description: Joi.string().optional(),
  price: Joi.number().min(0).optional(),
  thumbnail: Joi.string().uri().optional(),
  previewUrl: Joi.string().uri().optional(),
  category: Joi.string().optional(),
  tags: Joi.array().items(Joi.string()).optional(),
  isPublished: Joi.boolean().optional(),
});

module.exports = {
  createTemplateSchema,
  updateTemplateSchema,
};