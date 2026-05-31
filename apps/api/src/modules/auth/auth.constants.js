// src/modules/auth/auth.constants.js

module.exports = {
    ROLES: {
      USER: "USER",
      SELLER: "SELLER",
      ADMIN: "ADMIN",
    },
  
    TOKEN_TYPES: {
      ACCESS: "ACCESS",
      REFRESH: "REFRESH",
    },
  
    AUTH_MESSAGES: {
      REGISTER_SUCCESS: "User registered successfully",
      LOGIN_SUCCESS: "Login successful",
      LOGOUT_SUCCESS: "Logout successful",
      PASSWORD_CHANGED: "Password changed successfully",
      INVALID_CREDENTIALS: "Invalid email or password",
    },
  };