// src/common/middleware/errorHandler.js

const logger = require("../../shared/logger/logger");

const errorHandler = (err, req, res, next) => {
  logger.error(err);

  /*
  |--------------------------------------------------------------------------
  | Duplicate Key Error
  |--------------------------------------------------------------------------
  */
  if (err.code === 11000) {
    const field = Object.keys(err.keyValue)[0];

    return res.status(409).json({
      success: false,
      message: `${field} already exists`,
    });
  }

  /*
  |--------------------------------------------------------------------------
  | Mongoose Validation Error
  |--------------------------------------------------------------------------
  */
  if (err.name === "ValidationError" && err.errors) {
    return res.status(400).json({
      success: false,
      message: "Validation failed",
      errors: Object.values(err.errors).map(
        (e) => e.message
      ),
    });
  }

  /*
  |--------------------------------------------------------------------------
  | Custom App Errors
  |--------------------------------------------------------------------------
  */
  if (err.statusCode) {
    return res.status(err.statusCode).json({
      success: false,
      message: err.message,
    });
  }

  /*
  |--------------------------------------------------------------------------
  | JWT Errors
  |--------------------------------------------------------------------------
  */
  if (err.name === "JsonWebTokenError") {
    return res.status(401).json({
      success: false,
      message: "Invalid token",
    });
  }

  if (err.name === "TokenExpiredError") {
    return res.status(401).json({
      success: false,
      message: "Token expired",
    });
  }

  /*
  |--------------------------------------------------------------------------
  | Cast Error (Invalid Mongo ID)
  |--------------------------------------------------------------------------
  */
  if (err.name === "CastError") {
    return res.status(400).json({
      success: false,
      message: "Invalid ID format",
    });
  }

  /*
  |--------------------------------------------------------------------------
  | Default Server Error
  |--------------------------------------------------------------------------
  */
  return res.status(500).json({
    success: false,
    message:
      process.env.NODE_ENV === "production"
        ? "Internal Server Error"
        : err.message,

    ...(process.env.NODE_ENV !== "production" && {
      stack: err.stack,
    }),
  });
};

module.exports = errorHandler;