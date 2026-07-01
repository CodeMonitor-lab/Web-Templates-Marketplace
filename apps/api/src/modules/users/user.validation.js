// src/modules/users/user.validation.js
const Joi = require("joi");

const updateProfileSchema = Joi.object({
  name: Joi.string().trim().min(2).max(50).messages({
    "string.min": "Name must be at least 2 characters long",
  }),
  avatar: Joi.string().uri().allow(null, "").messages({
    "string.uri": "Avatar must be a valid URI address link",
  }),
});

const changePasswordSchema = Joi.object({
  currentPassword: Joi.string().required().messages({
    "any.required": "Current password is required to verify identity",
  }),
  newPassword: Joi.string().min(6).invalid(Joi.ref("currentPassword")).required().messages({
    "string.min": "New password must be at least 6 characters long",
    "any.required": "New password is a required field",
    "any.invalid": "New password cannot be identical to your old password",
  }),
});

module.exports = {
  updateProfileSchema,
  changePasswordSchema,
};