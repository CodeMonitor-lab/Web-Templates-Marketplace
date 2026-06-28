// src/lib/config/env.client.ts

const env = {
    APP_ENV: process.env.NEXT_PUBLIC_APP_ENV ?? "development",
  
    APP_NAME:
      process.env.NEXT_PUBLIC_APP_NAME ?? "Template-Marketplace",
  
    APP_URL:
      process.env.NEXT_PUBLIC_APP_URL ?? "http://localhost:3000",
  
    API_URL:
      process.env.NEXT_PUBLIC_API_URL ?? "",
  
    CLOUDINARY_CLOUD_NAME:
      process.env.NEXT_PUBLIC_CLOUDINARY_CLOUD_NAME ?? "",
  
    CLOUDINARY_UPLOAD_PRESET:
      process.env.NEXT_PUBLIC_CLOUDINARY_UPLOAD_PRESET ?? "",
  
    GA_ID: process.env.NEXT_PUBLIC_GA_ID ?? "",
  
    FEATURES: {
      ANALYTICS:
        process.env.NEXT_PUBLIC_ENABLE_ANALYTICS === "true",
  
      REVIEWS:
        process.env.NEXT_PUBLIC_ENABLE_REVIEWS === "true",
  
      WISHLIST:
        process.env.NEXT_PUBLIC_ENABLE_WISHLIST === "true",
    },
  } as const;
  
  export default env;