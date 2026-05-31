// src/common/middleware/auth.js

const jwt = require("jsonwebtoken");

const UnauthorizedError = require(
  "../../shared/errors/UnauthorizedError"
);

const auth = (req, res, next) => {
  try {
    const authHeader = req.headers.authorization;

    if (
      !authHeader ||
      !authHeader.startsWith("Bearer ")
    ) {
      throw new UnauthorizedError(
        "Access token required"
      );
    }

    const token = authHeader.split(" ")[1];

    const decoded = jwt.verify(
      token,
      process.env.JWT_SECRET
    );

    req.user = {
      id: decoded.id,
      email: decoded.email,
      role: decoded.role,
    };

    next();
  } catch (error) {
    next(
      new UnauthorizedError(
        "Invalid or expired token"
      )
    );
  }
};

module.exports = auth;