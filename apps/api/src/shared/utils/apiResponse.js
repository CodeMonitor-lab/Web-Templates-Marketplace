// src/shared/utils/apiResponse.js

/**
 * Standard Success Response Format
 * @param {string} message - Human-readable response message
 * @param {any} [data=null] - Payload content to deliver to client
 */
const success = (message, data = null) => {
  return {
    success: true,
    message: message || "Operation completed successfully",
    ...(data !== null && { data }),
  };
};

/**
 * Standard Error Response Format (For manual formatting outside global boundary)
 * @param {string} message - Root failure description
 * @param {any} [errors=null] - Detailed error parameters (e.g., specific Joi fields)
 */
const error = (message, errors = null) => {
  return {
    success: false,
    message: message || "An unexpected error occurred",
    ...(errors !== null && { errors }),
  };
};

// Exporting as an object wrapper so destructured or nested references work flawlessly
module.exports = {
  success,
  error,
};