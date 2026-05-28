// src/config/env/index.js

require("dotenv").config();

module.exports = {
  PORT: process.env.PORT || 5000,

  HOST: process.env.HOST || "localhost",

  MONGO_URI:
    process.env.MONGO_URI ||
    "mongodb://localhost:27017/web-templates-marketplace",

  NODE_ENV: process.env.NODE_ENV || "development",

  JWT_SECRET:
    process.env.JWT_SECRET || "supersecretjwtkey",
};