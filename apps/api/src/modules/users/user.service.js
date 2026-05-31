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
  const existingUser =
    await userRepository.findByEmail(payload.email);

  if (existingUser) {
    throw new ValidationError("Email already exists");
  }

  return userRepository.create(payload);
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

  if (payload.email) {
    const existingUser =
      await userRepository.findByEmail(payload.email);

    if (
      existingUser &&
      existingUser._id.toString() !== userId
    ) {
      throw new ValidationError("Email already exists");
    }
  }

  return userRepository.updateById(
    userId,
    payload
  );
};

/*
|--------------------------------------------------------------------------
| Get All Users
|--------------------------------------------------------------------------
*/
const getAllUsers = async () => {
  return userRepository.findAll();
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

  await userRepository.deleteById(userId);

  return true;
};

module.exports = {
  createUser,
  getProfile,
  updateProfile,
  getAllUsers,
  getUserById,
  deleteUser,
};