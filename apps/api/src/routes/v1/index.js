const express = require("express");
const router = express.Router();

/*
|--------------------------------------------------------------------------
| Health Check
|--------------------------------------------------------------------------
*/
router.get("/", (req, res) => {
  res.status(200).json({
    success: true,
    message: "API V1 working successfully 🚀",
  });
});

/*
|--------------------------------------------------------------------------
| Routes
|--------------------------------------------------------------------------
*/
const authRoutes = require("../../modules/auth/auth.routes");
const userRoutes = require("../../modules/users/user.routes");
const templateRoutes = require("../../modules/templates/template.routes");

router.use("/auth", authRoutes);
router.use("/users", userRoutes);
router.use("/templates", templateRoutes);

module.exports = router;