// src/modules/users/user.service.js

const userRepository = require("./user.repository");

const ValidationError = require("../../shared/errors/ValidationError");
const NotFoundError = require("../../shared/errors/NotFoundError");

/*
|--------------------------------------------------------------------------
| Create User
|--------------------------------------------------------------------------
*/
const createUser = async (payload) => {
  const { name, email, password } = payload;

  // Required fields validation
  if (!name || !email || !password) {
    throw new ValidationError(
      "Name, email and password are required"
    );
  }

  // Check existing email
  const existingUser = await userRepository.findByEmail(email);

  if (existingUser) {
    throw new ValidationError("Email already exists");
  }

  // Create user
  return await userRepository.create(payload);
};

/*
|--------------------------------------------------------------------------
| Get Profile
|--------------------------------------------------------------------------
*/
const getProfile = async (userId) => {
  const user = await userRepository.findById(userId);

  if (!user) {
    throw new NotFoundError("User not found");
  }

  return user;
};

/*
|--------------------------------------------------------------------------
| Update Profile
|--------------------------------------------------------------------------
*/
const updateProfile = async (userId, payload) => {
  const user = await userRepository.findById(userId);

  if (!user) {
    throw new NotFoundError("User not found");
  }

  // Prevent duplicate email update
  if (payload.email) {
    const existingUser = await userRepository.findByEmail(
      payload.email
    );

    if (
      existingUser &&
      existingUser._id.toString() !== userId
    ) {
      throw new ValidationError("Email already exists");
    }
  }

  return await userRepository.updateById(userId, payload);
};

/*
|--------------------------------------------------------------------------
| Get All Users
|--------------------------------------------------------------------------
*/
const getAllUsers = async () => {
  return await userRepository.findAll();
};

/*
|--------------------------------------------------------------------------
| Get User By ID
|--------------------------------------------------------------------------
*/
const getUserById = async (userId) => {
  const user = await userRepository.findById(userId);

  if (!user) {
    throw new NotFoundError("User not found");
  }

  return user;
};

/*
|--------------------------------------------------------------------------
| Delete User
|--------------------------------------------------------------------------
*/
const deleteUser = async (userId) => {
  const user = await userRepository.findById(userId);

  if (!user) {
    throw new NotFoundError("User not found");
  }

  return await userRepository.deleteById(userId);
};

module.exports = {
  createUser,
  getProfile,
  updateProfile,
  getAllUsers,
  getUserById,
  deleteUser,
};