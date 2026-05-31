// src/modules/auth/auth.validation.js

const Joi = require("joi");

const registerSchema = Joi.object({
  name: Joi.string().min(2).max(100).required(),

  email: Joi.string()
    .email()
    .required(),

  password: Joi.string()
    .min(6)
    .max(50)
    .required(),

  role: Joi.string()
    .valid("USER", "SELLER", "ADMIN")
    .optional(),
});

const loginSchema = Joi.object({
  email: Joi.string()
    .email()
    .required(),

  password: Joi.string()
    .required(),
});

const changePasswordSchema = Joi.object({
  currentPassword: Joi.string().required(),

  newPassword: Joi.string()
    .min(6)
    .required(),
});

module.exports = {
  registerSchema,
  loginSchema,
  changePasswordSchema,
};