// src/modules/auth/auth.validation.js
const Joi = require("joi");

const registerSchema = Joi.object({
  name: Joi.string().trim().min(2).max(50).required().messages({
    "any.required": "Name is a required field",
  }),
  email: Joi.string().email().lowercase().trim().required().messages({
    "any.required": "Email is a required field",
    "string.email": "Please provide a valid email address",
  }),
  password: Joi.string().min(6).required().messages({
    "string.min": "Password must be at least 6 characters long",
    "any.required": "Password is a required field",
  }),
  role: Joi.string().valid("USER", "SELLER"),
});

const loginSchema = Joi.object({
  email: Joi.string().email().lowercase().trim().required(),
  password: Joi.string().required(),
});

const forgotPasswordSchema = Joi.object({
  email: Joi.string().email().lowercase().trim().required().messages({
    "any.required": "Email is a required field",
    "string.email": "Please provide a valid email address",
  }),
});

const resetPasswordSchema = Joi.object({
  password: Joi.string().min(6).required().messages({
    "string.min": "Password must be at least 6 characters long",
    "any.required": "Password is a required field",
  }),
});

module.exports = {
  registerSchema,
  loginSchema,
  forgotPasswordSchema,
  resetPasswordSchema,
};