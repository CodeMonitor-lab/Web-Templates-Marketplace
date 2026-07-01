// src/shared/errors/NotFoundError.js
const ApiError = require("./ApiError");
const httpStatus = require("../constants/httpStatus");

class NotFoundError extends ApiError {
  constructor(message) {
    super(message || "The requested resource lookup failed to identify matches", httpStatus.NOT_FOUND || 404);
    this.name = "NotFoundError";
  }
}

module.exports = NotFoundError;