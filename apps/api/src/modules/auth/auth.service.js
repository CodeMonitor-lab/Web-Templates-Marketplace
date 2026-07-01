// src/modules/auth/auth.service.js
const jwt = require("jsonwebtoken");
const bcrypt = require("bcryptjs");
const crypto = require("crypto");
const authRepository = require("./auth.repository");
const AuthModel = require("./auth.model"); // Pulling local alias model
const config = require("../../config/env");
const { UnauthorizedError, ValidationError } = require("../../shared/errors");
const { AUTH_MESSAGES } = require("./auth.constants");

class AuthService {
  /**
   * Generates a signed JSON Web Token (JWT) for authenticated users
   */
  generateToken(user) {
    return jwt.sign(
      { id: user._id, email: user.email, role: user.role },
      config.JWT_SECRET,
      { expiresIn: config.JWT_EXPIRES_IN }
    );
  }

  /**
   * Registers a new tenant user or seller into the marketplace database
   */
  async register({ name, email, password, role }) {
    const existingUser = await authRepository.findByEmail(email);
    if (existingUser) {
      throw new ValidationError(AUTH_MESSAGES.EMAIL_TAKEN);
    }

    const hashedPassword = await bcrypt.hash(password, config.BCRYPT_SALT_ROUNDS);

    const user = await authRepository.createUser({
      name,
      email,
      password: hashedPassword,
      role: role || "USER",
    });

    const token = this.generateToken(user);
    return { user, token };
  }

  /**
   * Authenticates user credentials against records
   */
  async login(email, password) {
    const user = await authRepository.findByEmail(email);
    if (!user) {
      throw new UnauthorizedError(AUTH_MESSAGES.INVALID_CREDENTIALS);
    }

    const isMatch = await bcrypt.compare(password, user.password);
    if (!isMatch) {
      throw new UnauthorizedError(AUTH_MESSAGES.INVALID_CREDENTIALS);
    }

    const token = this.generateToken(user);
    return { user, token };
  }

  /**
   * Generates a temporary, secure password reset token
   */
  async forgotPassword(email) {
    const user = await authRepository.findByEmail(email);
    if (!user) return null; // Security practice: prevents malicious user existence scanning

    const rawResetToken = crypto.randomBytes(32).toString("hex");

    user.passwordResetToken = crypto.createHash("sha256").update(rawResetToken).digest("hex");
    user.passwordResetExpires = Date.now() + 10 * 60 * 1000; // 10 minutes lifetime

    await user.save({ validateBeforeSave: false });
    return rawResetToken;
  }

  /**
   * Verifies the token validity and updates user password records using the repository structure
   */
  async resetPassword(token, newPassword) {
    const hashedToken = crypto.createHash("sha256").update(token).digest("hex");

    // Perform query validation on active expiration thresholds using internal model alias
    const user = await AuthModel.findOne({
      passwordResetToken: hashedToken,
      passwordResetExpires: { $gt: Date.now() },
    });

    if (!user) {
      throw new ValidationError("Password reset token is invalid or has expired.");
    }

    // Hash fresh replacement password string
    const newHashedPassword = await bcrypt.hash(newPassword, config.BCRYPT_SALT_ROUNDS);

    // Persist changes through custom repository instance layer
    await authRepository.updatePassword(user._id, newHashedPassword);

    // Remove token traces completely via user instance modifications
    user.passwordResetToken = undefined;
    user.passwordResetExpires = undefined;
    await user.save({ validateBeforeSave: false });

    const authToken = this.generateToken(user);
    return { user, token: authToken };
  }
}

module.exports = new AuthService();