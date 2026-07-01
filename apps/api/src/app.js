// src/app.js

const express = require("express");
const cors = require("cors");
const morgan = require("morgan");
const helmet = require("helmet");

const config = require("./config/env");

// Explicitly pull globalLimiter. Added a fallback to log if your import tree breaks.
const rateLimiterModule = require("./common/middleware/rateLimiter");
const globalLimiter = rateLimiterModule?.globalLimiter;

if (!globalLimiter) {
  console.error("🚨 FATAL: globalLimiter is undefined! Check your rateLimiter.js exports.");
}

const routes = require("./routes/v1");
const errorHandler = require("./common/middleware/errorHandler");
const logger = require("./shared/logger/logger");

const { swaggerUi, swaggerSpec } = require("./docs/swagger");

const app = express();

/*
|--------------------------------------------------------------------------
| Trust Proxy Configuration
|--------------------------------------------------------------------------
*/
app.set("trust proxy", 1);

/*
|--------------------------------------------------------------------------
| HTTP Security Headers
|--------------------------------------------------------------------------
*/
app.use(helmet());

/*
|--------------------------------------------------------------------------
| Cross-Origin Resource Sharing (CORS)
|--------------------------------------------------------------------------
*/
app.use(
  cors({
    origin: config.CLIENT_URL,
    credentials: true,
    methods: ["GET", "POST", "PUT", "PATCH", "DELETE", "OPTIONS"],
    allowedHeaders: ["Content-Type", "Authorization"],
  })
);

/*
|--------------------------------------------------------------------------
| Global Rate Limiting Gatekeeper
|--------------------------------------------------------------------------
*/
if (globalLimiter) {
  app.use(globalLimiter);
} else {
  // Safe fallback to prevent Express from crashing if the module exports are out of sync
  app.use((req, res, next) => next()); 
}

/*
|--------------------------------------------------------------------------
| Request Body Parsing Middlewares
|--------------------------------------------------------------------------
*/
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

/*
|--------------------------------------------------------------------------
| Traffic Logging Matrix
|--------------------------------------------------------------------------
*/
app.use(
  morgan("combined", {
    stream: {
      write: (message) => logger.info(message.trim()),
    },
  })
);

/*
|--------------------------------------------------------------------------
| Swagger Interface Endpoint Documentation (Development Mode)
|--------------------------------------------------------------------------
*/
if (config.NODE_ENV !== "production") {
  app.use("/api-docs", swaggerUi.serve, swaggerUi.setup(swaggerSpec));
}

/*
|--------------------------------------------------------------------------
| Root API Health Check Gateway
|--------------------------------------------------------------------------
*/
app.get("/", (req, res) => {
  return res.status(200).json({
    success: true,
    message: "API is running successfully 🚀",
    environment: config.NODE_ENV,
  });
});

/*
|--------------------------------------------------------------------------
| Primary Module Routing Matrix Tree
|--------------------------------------------------------------------------
*/
app.use("/api/v1", routes);

/*
|--------------------------------------------------------------------------
| Resource Not Found (404 Fallback Boundary)
|--------------------------------------------------------------------------
*/
app.use((req, res) => {
  logger.warn(`404 Route Not Found: ${req.originalUrl}`);
  return res.status(404).json({
    success: false,
    message: "Route not found",
  });
});

/*
|--------------------------------------------------------------------------
| Global System Exception Boundary Interceptor Middleware
|--------------------------------------------------------------------------
*/
app.use(errorHandler);

module.exports = app;