// src/app.js

const express = require("express");
const cors = require("cors");
const morgan = require("morgan");
const helmet = require("helmet");

const config = require("./config/env");

const rateLimiter = require("./common/middleware/rateLimiter");
const routes = require("./routes/v1");
const errorHandler = require("./common/middleware/errorHandler");
const logger = require("./shared/logger/logger");

const { swaggerUi, swaggerSpec } = require("./docs/swagger");

const app = express();



/*
|--------------------------------------------------------------------------
| Trust Proxy
|--------------------------------------------------------------------------
*/
app.set("trust proxy", 1);

/*
|--------------------------------------------------------------------------
| Security
|--------------------------------------------------------------------------
*/
app.use(helmet());

/*
|--------------------------------------------------------------------------
| CORS
|--------------------------------------------------------------------------
*/
app.use(
  cors({
    origin: config.CLIENT_URL,
    credentials: true,
    methods: [
      "GET",
      "POST",
      "PUT",
      "PATCH",
      "DELETE",
      "OPTIONS",
    ],
    allowedHeaders: [
      "Content-Type",
      "Authorization",
    ],
  })
);

/*
|--------------------------------------------------------------------------
| Rate Limiting
|--------------------------------------------------------------------------
*/
app.use(rateLimiter);

/*
|--------------------------------------------------------------------------
| Body Parsing
|--------------------------------------------------------------------------
*/
app.use(express.json());

app.use(
  express.urlencoded({
    extended: true,
  })
);

/*
|--------------------------------------------------------------------------
| Logger
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
| Swagger Docs (Development Only)
|--------------------------------------------------------------------------
*/
if (config.NODE_ENV !== "production") {
  app.use(
    "/api-docs",
    swaggerUi.serve,
    swaggerUi.setup(swaggerSpec)
  );
}

/*
|--------------------------------------------------------------------------
| Health Check
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
| API Routes
|--------------------------------------------------------------------------
*/
app.use("/api/v1", routes);

/*
|--------------------------------------------------------------------------
| 404 Handler
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
| Global Error Handler
|--------------------------------------------------------------------------
*/
app.use(errorHandler);

module.exports = app;