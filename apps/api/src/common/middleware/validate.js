// src/common/middleware/validate.js

const validate = (schema, property = "body") => {
    return (req, res, next) => {
      const data = req[property];
  
      const { error } = schema.validate(data, {
        abortEarly: false,
        stripUnknown: true,
      });
  
      if (error) {
        return res.status(400).json({
          success: false,
          message: "Validation error",
          errors: error.details.map((err) => err.message),
        });
      }
  
      next();
    };
  };
  
  module.exports = validate;