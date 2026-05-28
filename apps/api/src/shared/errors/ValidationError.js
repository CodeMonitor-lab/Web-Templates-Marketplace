// src/shared/errors/ValidationError.js

class ValidationError extends Error {
    constructor(message = "Validation Error") {
      super(message);
  
      this.name = "ValidationError";
      this.statusCode = 400;
  
      Error.captureStackTrace(this, this.constructor);
    }
  }
  
  module.exports = ValidationError;