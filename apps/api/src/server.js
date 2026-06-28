// src/server.js

const app = require("./app");
const connectDB = require("./infrastructure/database");
const config = require("./config/env");
const logger = require("./shared/logger/logger");

const startServer = async () => {
  try {
    await connectDB();

    const PORT = process.env.PORT || config.PORT;

    const server = app.listen(PORT, () => {
      logger.info(
        `Server running in ${config.NODE_ENV} mode`
      );

      logger.info(
        `Listening on port ${PORT}`
      );

      if (config.NODE_ENV === "development") {
        logger.info(
          `API Documentation: http://localhost:${PORT}/api-docs`
        );
      }
    });

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