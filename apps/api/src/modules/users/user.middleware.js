// src/common/middleware/auth.js

const jwt = require("jsonwebtoken");
const UnauthorizedError = require("../../shared/errors/UnauthorizedError");

const auth = (req, res, next) => {
  try {
    const authHeader = req.headers.authorization;

    if (!authHeader || !authHeader.startsWith("Bearer ")) {
      // Throwing this will now be passed to the catch block safely
      throw new UnauthorizedError("Access token required");
    }

    const token = authHeader.split(" ")[1];

    // Decodes and validates signature expiry against env configurations
    const decoded = jwt.verify(token, process.env.JWT_SECRET);

    // Hydrate request payload context for downstream controllers
    req.user = {
      id: decoded.id,
      email: decoded.email,
      role: decoded.role,
    };

    next();
  } catch (error) {
    // If it's already an instance of our custom domain errors, pass it straight through
    if (error.statusCode) {
      return next(error);
    }
    
    // Otherwise, intercept native JsonWebTokenError / TokenExpiredError
    next(new UnauthorizedError("Invalid or expired token"));
  }
};

module.exports = auth;