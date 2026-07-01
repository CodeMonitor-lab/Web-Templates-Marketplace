// src/modules/users/user.service.js
const bcrypt = require("bcryptjs");
const userRepository = require("./user.repository");
const config = require("../../config/env");
const { ValidationError, UnauthorizedError } = require("../../shared/errors");

class UserService {
  async getProfile(userId) {
    const user = await userRepository.findById(userId);
    if (!user) {
      throw new ValidationError("Requested user profile account record does not exist.");
    }
    return user;
  }

  async updateProfile(userId, updateData) {
    // Whitelist modifiable fields to block malicious payload injections (like forcing role = 'ADMIN')
    const allowedUpdates = ["name", "avatar"];
    const filteredUpdates = Object.keys(updateData)
      .filter((key) => allowedUpdates.includes(key))
      .reduce((obj, key) => {
        obj[key] = updateData[key];
        return obj;
      }, {});

    const updatedUser = await userRepository.updateById(userId, filteredUpdates);
    if (!updatedUser) {
      throw new ValidationError("Failed to update profile record. User not found.");
    }
    return updatedUser;
  }

  async changePassword(userId, currentPassword, newPassword) {
    const user = await userRepository.findById(userId, true); // true selects the password hash explicitly
    if (!user) {
      throw new UnauthorizedError("Authentication verification metrics failed.");
    }

    const isMatch = await bcrypt.compare(currentPassword, user.password);
    if (!isMatch) {
      throw new ValidationError("The current password provided is incorrect.");
    }

    // Encrypt fresh hash password safely using configuration metrics factor
    user.password = await bcrypt.hash(newPassword, config.BCRYPT_SALT_ROUNDS);
    await user.save();
    
    return true;
  }
}

module.exports = new UserService();