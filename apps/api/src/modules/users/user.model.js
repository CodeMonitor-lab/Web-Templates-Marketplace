// src/modules/users/user.model.js

const mongoose = require("mongoose");

const userSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
      trim: true,
    },

    email: {
      type: String,
      required: true,
      unique: true,
      lowercase: true,
      trim: true,
    },

    password: {
      type: String,
      required: true,
      select: false, // Prevents password hashes from leaking during standard queries
    },

    role: {
      type: String,
      enum: ["USER", "SELLER", "ADMIN"],
      default: "USER",
    },

    avatar: {
      type: String,
      default: null,
    },

    isVerified: {
      type: Boolean,
      default: false,
    },

    /*
    |--------------------------------------------------------------------------
    | Password Recovery Metric Tracking Fields
    |--------------------------------------------------------------------------
    | select: false ensures these token signatures aren't routinely fetched 
    | into general profile payloads unless explicitly requested via .select()
    */
    passwordResetToken: {
      type: String,
      select: false,
      default: null,
    },

    passwordResetExpires: {
      type: Date,
      select: false,
      default: null,
    },
  },
  {
    timestamps: true, // Automatically manages createdAt and updatedAt records
  }
);

// Optimize looking up users by reset tokens on the database level
userSchema.index({ passwordResetToken: 1 }, { sparse: true });

module.exports =
  mongoose.models.User ||
  mongoose.model("User", userSchema);