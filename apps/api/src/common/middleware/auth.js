const jwt = require("jsonwebtoken");
const UnauthorizedError = require("../../shared/errors/UnauthorizedError");

const auth = (...roles) => {
  return (req, res, next) => {
    try {
      const authHeader = req.headers.authorization;

      if (!authHeader || !authHeader.startsWith("Bearer ")) {
        return next(new UnauthorizedError("Access token required"));
      }

      const token = authHeader.split(" ")[1];

      const decoded = jwt.verify(token, process.env.JWT_SECRET);

      req.user = decoded;

      if (roles.length && !roles.includes(decoded.role)) {
        return next(new UnauthorizedError("Unauthorized access"));
      }

      return next();
    } catch (error) {
      // JWT-specific handling
      if (error.name === "TokenExpiredError") {
        return next(new UnauthorizedError("Token expired"));
      }

      if (error.name === "JsonWebTokenError") {
        return next(new UnauthorizedError("Invalid token"));
      }

      return next(error); // IMPORTANT: don't mask unknown errors
    }
  };
};

module.exports = auth;