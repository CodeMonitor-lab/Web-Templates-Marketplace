// src/common/middleware/rateLimiter.js

const rateLimit = require("express-rate-limit");

const isProduction = process.env.NODE_ENV === "production";

const rateLimiter = rateLimit({
  windowMs: 15 * 60 * 1000, // 15 minutes

  // Different limits for dev & prod
  max: isProduction ? 100 : 1000,

  // Better headers
  standardHeaders: true,
  legacyHeaders: false,

  // Skip localhost in development
  skip: (req) => {
    if (!isProduction) {
      return (
        req.ip === "::1" ||
        req.ip === "127.0.0.1" ||
        req.ip === "::ffff:127.0.0.1"
      );
    }

    return false;
  },

  message: {
    success: false,
    message: "Too many requests, please try again later",
  },
});

module.exports = rateLimiter;