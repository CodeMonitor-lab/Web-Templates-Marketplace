// src/common/middleware/errorHandler.js

const errorHandler = (err, req, res, next) => {
  const statusCode = err.statusCode || 500;
  
  const response = {
    success: false,
    message: err.message || "An unexpected error occurred.",
    // CRITICAL: Ensure process.env.NODE_ENV is checked perfectly
    ...(process.env.NODE_ENV === "development" && { stack: err.stack })
  };

  return res.status(statusCode).json(response);
};

module.exports = errorHandler;