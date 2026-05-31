// src/modules/users/user.validation.js

const Joi = require("joi");

const createUserSchema = Joi.object({
  name: Joi.string().min(2).max(100).required(),

  email: Joi.string()
    .email()
    .required(),

  password: Joi.string()
    .min(6)
    .required(),
});

const updateProfileSchema = Joi.object({
  name: Joi.string().min(2).max(100),

  email: Joi.string().email(),

  avatar: Joi.string().uri(),
}).min(1);

const userIdSchema = Joi.object({
  id: Joi.string().required(),
});

module.exports = {
  createUserSchema,
  updateProfileSchema,
  userIdSchema,
};