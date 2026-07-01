// src/config/env/index.js

const dotenv = require("dotenv");
const path = require("path");
const fs = require("fs");

/*
|--------------------------------------------------------------------------
| Environment File Path Resolution Matrix
|--------------------------------------------------------------------------
| Checks for .env.local first (common in local monorepos/tooling setups)
| before falling back to the standard .env configuration file layout.
*/
const rootDir = path.join(__dirname, "../../../");
const envLocalPath = path.resolve(rootDir, ".env.local");
const envPath = path.resolve(rootDir, ".env");

if (fs.existsSync(envLocalPath)) {
  dotenv.config({ path: envLocalPath });
} else {
  dotenv.config({ path: envPath });
}

/*
|--------------------------------------------------------------------------
| Core System Configuration Values Mapping Object
|--------------------------------------------------------------------------
*/
const config = {
  NODE_ENV: process.env.NODE_ENV || "development",
  PORT: parseInt(process.env.PORT, 10) || 5000,
  HOST: process.env.HOST || "0.0.0.0",
  API_PREFIX: process.env.API_PREFIX || "/api/v1",
  
  // Database Configuration Matrix
  MONGO_URI: process.env.MONGO_URI,

  // Authentication Setup & Security Constants
  JWT_SECRET: process.env.JWT_SECRET,
  JWT_EXPIRES_IN: process.env.JWT_EXPIRES_IN || "7d",
  JWT_REFRESH_SECRET: process.env.JWT_REFRESH_SECRET,
  JWT_REFRESH_EXPIRES_IN: process.env.JWT_REFRESH_EXPIRES_IN || "30d",
  BCRYPT_SALT_ROUNDS: parseInt(process.env.BCRYPT_SALT_ROUNDS, 10) || 10,

  // CORS / Client Whitelist Targets
  CLIENT_URL: process.env.CLIENT_URL || "http://localhost:3000",
  CORS_ORIGIN: process.env.CORS_ORIGIN || "http://localhost:3000",

  // Third-Party Asset CDN Config Engine
  CLOUDINARY: {
    CLOUD_NAME: process.env.CLOUDINARY_CLOUD_NAME,
    API_KEY: process.env.CLOUDINARY_API_KEY,
    API_SECRET: process.env.CLOUDINARY_API_SECRET,
    FOLDER: process.env.CLOUDINARY_FOLDER || "templates-marketplace",
  },

  // Upload Constraint Computations
  MAX_FILE_SIZE: parseInt(process.env.MAX_FILE_SIZE, 10) || 10485760, // Default: 10MB
  
  // Log Stream Strategy Metrics
  LOG_LEVEL: process.env.LOG_LEVEL || "info",
};

/*
|--------------------------------------------------------------------------
| Startup Integrity Guardrails
|--------------------------------------------------------------------------
| Prevents the application from starting in an unstable or misconfigured 
| state by identifying missing critical environment parameters instantly.
*/
const REQUIRED_ENV_VARS = ["MONGO_URI", "JWT_SECRET"];
const missingVars = REQUIRED_ENV_VARS.filter((key) => !config[key]);

if (missingVars.length > 0) {
  console.error("\n🚨 CRITICAL CONFIGURATION EXCEPTION ERROR:");
  console.error("=================================================================");
  console.error(`Application boot failure. Missing parameters: [ ${missingVars.join(", ")} ]`);
  console.error("=================================================================");
  console.error(`Checked root directory paths:\n  1. ${envLocalPath}\n  2. ${envPath}`);
  console.error("\nPlease update your environment file with valid parameters to continue.\n");
  process.exit(1);
}

module.exports = config;