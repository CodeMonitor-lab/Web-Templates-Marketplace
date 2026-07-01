// src/modules/users/user.constants.js

const USER_ROLES = {
    USER: "USER",
    SELLER: "SELLER",
    ADMIN: "ADMIN",
  };
  
  const USER_MESSAGES = {
    NOT_FOUND: "User profile not found.",
    EMAIL_ALREADY_EXISTS: "An account with this email address already exists.",
    UPDATE_SUCCESS: "Profile updated successfully.",
    DELETE_SUCCESS: "User account deactivated successfully.",
  };
  
  module.exports = {
    USER_ROLES,
    USER_MESSAGES,
  };