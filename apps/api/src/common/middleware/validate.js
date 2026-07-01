// src/common/middleware/validate.js

const ValidationError = require("../../shared/errors/ValidationError");

/**
 * Validates request data structures against a schema constraint.
 * @param {Object} schema - Joi validation schema object blueprint
 * @param {string} [source='body'] - The req property to evaluate ('body', 'query', 'params')
 */
const validate = (schema, source = "body") => {
  return (req, res, next) => {
    const { value, error } = schema.validate(req[source], {
      abortEarly: false, // Extract ALL validation failures, not just the first one
      stripUnknown: true, // Drop unmapped query payload properties safely
    });

    if (error) {
      // Map multiple errors into a readable layout string
      const errorMessage = error.details.map((detail) => detail.message).join(", ");
      return next(new ValidationError(errorMessage));
    }

    // Replace the raw stream object with your clean, validated properties
    req[source] = value;
    next();
  };
};

module.exports = validate;