// src/modules/users/user.routes.js
const express = require("express");
const router = express.Router();
const userController = require("./user.controller");

// Middlewares
const auth = require("../../common/middleware/auth");
const validate = require("../../common/middleware/validate");
const asyncHandler = require("../../common/middleware/asyncHandler");

// Validation schemas
const { updateProfileSchema, changePasswordSchema } = require("./user.validation");

// Enforce auth token check guard across all profile routing sub-methods
router.use(auth);

router.get("/me", asyncHandler(userController.getProfile));
router.put("/me", validate(updateProfileSchema), asyncHandler(userController.updateProfile));
router.put("/me/password", validate(changePasswordSchema), asyncHandler(userController.updatePassword));

module.exports = router;