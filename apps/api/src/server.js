// src/server.js

const app = require("./app");
const connectDB = require("./infrastructure/database");
const config = require("./config/env");
const logger = require("./shared/logger/logger");

const startServer = async () => {
  try {
    /*
    |--------------------------------------------------------------------------
    | Database Connection
    |--------------------------------------------------------------------------
    */
    await connectDB();

    /*
    |--------------------------------------------------------------------------
    | Start Server
    |--------------------------------------------------------------------------
    */

    const baseUrl = `http://${config.HOST}:${config.PORT}`;

    const server = app.listen(config.PORT, () => {
      logger.info(
        `Server running on ${baseUrl}\nAPI Documentation: ${baseUrl}/api-docs`
      );
    });

    /*
    |--------------------------------------------------------------------------
    | Graceful Shutdown
    |--------------------------------------------------------------------------
    */

    process.on("SIGTERM", () => {
      logger.info("SIGTERM received. Shutting down gracefully...");
      server.close(() => {
        logger.info("Process terminated");
      });
    });

    process.on("SIGINT", () => {
      logger.info("SIGINT received. Shutting down gracefully...");
      server.close(() => {
        logger.info("Process terminated");
      });
    });
  } catch (error) {
    logger.error(`Server startup failed: ${error.message}`);
    process.exit(1);
  }
};

startServer();