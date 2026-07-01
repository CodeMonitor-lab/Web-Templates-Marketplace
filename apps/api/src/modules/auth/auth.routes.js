// src/modules/auth/auth.routes.js
const express = require("express");
const router = express.Router();
const authController = require("./auth.controller");

const validate = require("../../common/middleware/validate");
const asyncHandler = require("../../common/middleware/asyncHandler");
const { 
  registerSchema, 
  loginSchema, 
  forgotPasswordSchema, 
  resetPasswordSchema 
} = require("./auth.validation");

// Core Authentication Routers
router.post("/register", validate(registerSchema), asyncHandler(authController.register));
router.post("/login", validate(loginSchema), asyncHandler(authController.login));

// Recovery & Security Routers
router.post("/forgot-password", validate(forgotPasswordSchema), asyncHandler(authController.forgotPassword));
router.post("/reset-password", validate(resetPasswordSchema), asyncHandler(authController.resetPassword));

module.exports = router;