// src/infrastructure/database/index.js

const mongoose = require("mongoose");

const config = require("../../config/env");

const logger = require("../../shared/logger/logger");

const connectDB = async () => {
  try {
    await mongoose.connect(config.MONGO_URI);

    logger.info("MongoDB connected successfully");
  } catch (error) {
    logger.error(`MongoDB connection failed: ${error.message}`);

    process.exit(1);
  }
};

module.exports = connectDB;