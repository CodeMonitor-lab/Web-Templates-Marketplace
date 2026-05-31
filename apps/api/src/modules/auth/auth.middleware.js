// src/modules/auth/auth.middleware.js

const jwt = require("jsonwebtoken");

const UnauthorizedError = require(
  "../../shared/errors/UnauthorizedError"
);

const auth = (...roles) => {
  return (req, res, next) => {
    try {
      const authHeader =
        req.headers.authorization;

      if (
        !authHeader ||
        !authHeader.startsWith("Bearer ")
      ) {
        throw new UnauthorizedError(
          "Access token required"
        );
      }

      const token =
        authHeader.split(" ")[1];

      const decoded = jwt.verify(
        token,
        process.env.JWT_SECRET
      );

      req.user = decoded;

      if (
        roles.length &&
        !roles.includes(decoded.role)
      ) {
        throw new UnauthorizedError(
          "Access denied"
        );
      }

      next();
    } catch (error) {
      next(error);
    }
  };
};

module.exports = auth;