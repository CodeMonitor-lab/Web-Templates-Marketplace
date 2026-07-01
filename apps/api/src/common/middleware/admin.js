// src/common/middleware/admin.js

const ForbiddenError = require("../../shared/errors/ForbiddenError");

/**
 * Restricts route access to specific user roles.
 * @param {...string} roles - Permitted roles (e.g., 'ADMIN', 'SELLER')
 */
const authorize = (...roles) => {
  return (req, res, next) => {
    if (!req.user) {
      return next(new ForbiddenError("Authentication context missing. Access denied."));
    }

    if (!roles.includes(req.user.role)) {
      return next(
        new ForbiddenError(`Access denied. Requires one of the following roles: [${roles.join(", ")}]`)
      );
    }

    next();
  };
};

module.exports = authorize;