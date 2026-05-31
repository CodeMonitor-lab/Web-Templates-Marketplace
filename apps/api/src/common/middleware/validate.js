// src/common/middleware/validate.js

const ValidationError = require("../../shared/errors/ValidationError");

const validate = (schema, source = "body") => {
  return (req, res, next) => {
    const { error, value } = schema.validate(
      req[source],
      {
        abortEarly: false,
        stripUnknown: true,
      }
    );

    if (error) {
      return next(
        new ValidationError(
          error.details
            .map((item) => item.message)
            .join(", ")
        )
      );
    }

    req[source] = value;

    next();
  };
};

module.exports = validate;