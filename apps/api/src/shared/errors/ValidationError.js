// src/shared/errors/ValidationError.js
const ApiError = require("./ApiError");
const httpStatus = require("../constants/httpStatus");

class ValidationError extends ApiError {
  constructor(message) {
    super(message || "Validation failed data integrity rules", httpStatus.BAD_REQUEST || 400);
    this.name = "ValidationError";
  }
}

module.exports = ValidationError;