// src/modules/auth/auth.routes.js

const express = require("express");

const router = express.Router();

const authController = require(
  "./auth.controller"
);

const validate = require(
  "../../common/middleware/validate"
);

const auth = require(
  "./auth.middleware"
);

const {
  registerSchema,
  loginSchema,
  changePasswordSchema,
} = require("./auth.validation");

router.post(
  "/register",
  validate(registerSchema),
  authController.register
);

router.post(
  "/login",
  validate(loginSchema),
  authController.login
);

router.post(
  "/change-password",
  auth(),
  validate(changePasswordSchema),
  authController.changePassword
);
router.post(
  "/logout",
  auth(),
  authController.logout
);

module.exports = router;