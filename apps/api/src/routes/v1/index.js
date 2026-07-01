// src/routes/v1/index.js
const express = require("express");
const router = express.Router();

const { authRoutes } = require("../../modules/auth");
const { userRoutes } = require("../../modules/users");
// ⚠️ DOUBLE-CHECK THIS: Ensure templates/index.js actually exports 'templateRoutes'
const { templateRoutes } = require("../../modules/templates"); 

router.use("/auth", authRoutes);
router.use("/users", userRoutes);
if (templateRoutes) {
  router.use("/templates", templateRoutes);
} else {
  console.error("❌ Warning: templateRoutes is undefined!");
}

module.exports = router; // ⚠️ Make sure this line exists!