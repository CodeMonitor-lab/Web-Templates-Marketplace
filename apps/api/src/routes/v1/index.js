// src/routes/v1/index.js

const express = require("express");

const router = express.Router();

/*
|--------------------------------------------------------------------------
| Module Routes
|--------------------------------------------------------------------------
*/
const {
  templateRoutes,
} = require("../../modules/templates");

const userRoutes = require("../../modules/users/user.routes");

/*
|--------------------------------------------------------------------------
| Health Check
|--------------------------------------------------------------------------
*/
router.get("/", (req, res) => {
  return res.status(200).json({
    success: true,
    message: "API V1 working successfully 🚀",
  });
});

/*
|--------------------------------------------------------------------------
| User Routes
|--------------------------------------------------------------------------
*/
router.use("/users", userRoutes);

/*
|--------------------------------------------------------------------------
| Template Routes
|--------------------------------------------------------------------------
*/
router.use("/templates", templateRoutes);

module.exports = router;