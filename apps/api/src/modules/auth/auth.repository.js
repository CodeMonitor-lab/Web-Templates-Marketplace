// src/modules/auth/auth.repository.js

const User = require("../users/user.model");

const createUser = async (payload) => {
  return User.create(payload);
};

const findByEmail = async (email) => {
  return User.findOne({ email }).select("+password");
};

const findById = async (id) => {
  return User.findById(id).select("+password");
};

const updatePassword = async (
  userId,
  password
) => {
  return User.findByIdAndUpdate(
    userId,
    { password },
    { new: true }
  );
};

module.exports = {
  createUser,
  findByEmail,
  findById,
  updatePassword,
};