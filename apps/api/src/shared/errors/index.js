// src/shared/errors/index.js
const ApiError = require("./ApiError");
const ValidationError = require("./ValidationError");
const UnauthorizedError = require("./UnauthorizedError");
const ForbiddenError = require("./ForbiddenError");
const NotFoundError = require("./NotFoundError");

module.exports = {
  ApiError,
  ValidationError,
  UnauthorizedError,
  ForbiddenError,
  NotFoundError,
};