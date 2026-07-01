// src/shared/errors/UnauthorizedError.js
const ApiError = require("./ApiError");
const httpStatus = require("../constants/httpStatus");

class UnauthorizedError extends ApiError {
  constructor(message) {
    super(message || "Authentication credentials missing or invalid", httpStatus.UNAUTHORIZED || 401);
    this.name = "UnauthorizedError";
  }
}

module.exports = UnauthorizedError;