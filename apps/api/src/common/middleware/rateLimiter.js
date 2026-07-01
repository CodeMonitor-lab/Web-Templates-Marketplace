// src/common/middleware/rateLimiter.js
const rateLimit = require("express-rate-limit");
const httpStatus = require("../../shared/constants/httpStatus");

const createLimiter = (windowMs, maxRequests, customMessage) => {
  return rateLimit({
    windowMs: windowMs || 15 * 60 * 1000, // 15 minutes
    max: maxRequests || 100,
    standardHeaders: true,
    legacyHeaders: false,
    message: {
      success: false,
      message: customMessage || "Too many requests from this IP. Please try again later.",
    },
    // Fallback to 429 if httpStatus object lacks standard naming conventions
    statusCode: httpStatus.TOO_MANY_REQUESTS || httpStatus.StatusCodes?.TOO_MANY_REQUESTS || 429,
  });
};

const globalLimiter = createLimiter(15 * 60 * 1000, 300, "Global traffic limits reached.");
const authLimiter = createLimiter(10 * 60 * 1000, 20, "Too many authentication attempts.");

// CRITICAL: Ensure these match the destructured names exactly!
module.exports = {
  globalLimiter,
  authLimiter,
};