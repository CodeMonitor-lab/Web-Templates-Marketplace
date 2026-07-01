// src/server.js

const app = require("./app");
const connectDB = require("./infrastructure/database");
const config = require("./config/env");
const logger = require("./shared/logger/logger");
const mongoose = require("mongoose"); // Added to manage clean connection teardowns

const startServer = async () => {
  try {
    // Initialize Database Connection Pool
    await connectDB();

    const PORT = process.env.PORT || config.PORT || 5000;

    const server = app.listen(PORT, () => {
      logger.info(`Server running in ${config.NODE_ENV} mode`);
      logger.info(`Listening on port ${PORT}`);

      if (config.NODE_ENV === "development") {
        logger.info(`API Documentation: http://localhost:${PORT}/api-docs`);
      }
    });

    /**
     * Graceful Shutdown Pipeline Handler
     * Prevents data corruption by allowing active requests to finish, 
     * then gracefully disconnects database drivers before termination.
     */
    const handleGracefulShutdown = (signal) => {
      logger.info(`${signal} received. Initiating graceful shutdown...`);

      // 1. Stop accepting new connections over HTTP socket
      server.close(async () => {
        logger.info("HTTP server stopped accepting new incoming requests.");

        try {
          // 2. Safely close database client connections
          if (mongoose.connection.readyState !== 0) {
            await mongoose.connection.close(false);
            logger.info("MongoDB database connection pool drained cleanly.");
          }
          
          logger.info("Process terminated successfully. Goodbye!");
          process.exit(0);
        } catch (dbError) {
          logger.error(`Error draining database connections during shutdown: ${dbError.message}`);
          process.exit(1);
        }
      });

      // Force terminate after 10 seconds if connections are hanging out stubbornly
      setTimeout(() => {
        logger.error("Could not close connections in time, forcing standard application exit.");
        process.exit(1);
      }, 10000);
    };

    // System Process Listeners
    process.on("SIGTERM", () => handleGracefulShutdown("SIGTERM"));
    process.on("SIGINT", () => handleGracefulShutdown("SIGINT"));

    // Catch unexpected uncaught errors without silent stalling
    process.on("unhandledRejection", (err) => {
      logger.error(`UNHANDLED REJECTION! 💥 Shutting down system: ${err.message}`);
      if (err.stack) logger.error(err.stack);
      
      // Give the server a moment to log context before crashing completely
      server.close(() => {
        process.exit(1);
      });
    });

  } catch (error) {
    logger.error(`Server startup failed: ${error.message}`);
    process.exit(1);
  }
};

startServer();