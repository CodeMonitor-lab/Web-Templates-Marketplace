// src/shared/errors/ApiError.js

class ApiError extends Error {
  constructor(message, statusCode) {
    super(message);
    this.statusCode = statusCode;
    this.status = `${statusCode}`.startsWith("4") ? "fail" : "error";
    this.isOperational = true; // Helps identify trusted operational errors vs unexpected native bugs

    Error.captureStackTrace(this, this.constructor);
  }
}

module.exports = ApiError;