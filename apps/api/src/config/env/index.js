const dotenv = require("dotenv");

dotenv.config({
  path:
    process.env.NODE_ENV === "production"
      ? ".env.production"
      : ".env.local",
});

const env = {
  PORT: Number(process.env.PORT) || 5000,
  HOST: process.env.HOST || "127.0.0.1",
  NODE_ENV: process.env.NODE_ENV || "development",

  MONGO_URI: process.env.MONGO_URI,

  JWT_SECRET: process.env.JWT_SECRET,

  JWT_EXPIRES_IN:
    process.env.JWT_EXPIRES_IN || "7d",

  CLIENT_URL:
    process.env.CLIENT_URL ||
    "http://localhost:3000",
};

if (!env.MONGO_URI) {
  throw new Error("Missing MONGO_URI");
}

if (!env.JWT_SECRET) {
  throw new Error("Missing JWT_SECRET");
}

module.exports = env;