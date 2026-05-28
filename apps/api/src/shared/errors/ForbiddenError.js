// src/shared/errors/ForbiddenError.js

class ForbiddenError extends Error {
    constructor(message = "Forbidden") {
      super(message);
  
      this.name = "ForbiddenError";
      this.statusCode = 403;
  
      Error.captureStackTrace(this, this.constructor);
    }
  }
  
  module.exports = ForbiddenError;