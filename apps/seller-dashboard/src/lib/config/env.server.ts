// src/lib/config/env.server.ts

const env = {
    NODE_ENV: process.env.NODE_ENV,
  
    JWT_SECRET: process.env.JWT_SECRET || "",
    JWT_REFRESH_SECRET: process.env.JWT_REFRESH_SECRET || "",
  
    DATABASE_URL: process.env.DATABASE_URL || "",
  
    STRIPE_SECRET_KEY: process.env.STRIPE_SECRET_KEY || "",
  
    CLOUDINARY_API_SECRET: process.env.CLOUDINARY_API_SECRET || "",
  } as const;
  
  // safety checks (server only)
  if (!env.JWT_SECRET) throw new Error("Missing JWT_SECRET");
  if (!env.DATABASE_URL) throw new Error("Missing DATABASE_URL");
  
  export default env;