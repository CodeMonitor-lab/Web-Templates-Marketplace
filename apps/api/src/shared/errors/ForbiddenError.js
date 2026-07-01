// src/shared/errors/ForbiddenError.js
const ApiError = require("./ApiError");
const httpStatus = require("../constants/httpStatus");

class ForbiddenError extends ApiError {
  constructor(message) {
    super(message || "You do not possess privileges to execute this transaction", httpStatus.FORBIDDEN || 403);
    this.name = "ForbiddenError";
  }
}

module.exports = ForbiddenError;