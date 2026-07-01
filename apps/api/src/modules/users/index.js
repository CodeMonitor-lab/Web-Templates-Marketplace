// src/modules/users/index.js
const userRoutes = require("./user.routes");
const userModel = require("./user.model");
const userService = require("./user.service");

module.exports = {
  userRoutes,
  userModel,
  userService,
};