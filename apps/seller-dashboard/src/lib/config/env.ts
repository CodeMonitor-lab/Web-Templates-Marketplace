// src/lib/config/env.ts

const env = {
  API_URL: process.env.NEXT_PUBLIC_API_URL ?? "",
  APP_NAME: process.env.NEXT_PUBLIC_APP_NAME ?? "",
};

if (!env.API_URL) {
  throw new Error(
    "NEXT_PUBLIC_API_URL is missing from .env.local"
  );
}

export default env;