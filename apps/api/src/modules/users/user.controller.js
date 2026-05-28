// src/modules/users/user.controller.js

const userService = require("./user.service");
const asyncHandler = require("../../common/middleware/asyncHandler");
const ValidationError = require("../../shared/errors/ValidationError");

/*
|--------------------------------------------------------------------------
| Create User
|--------------------------------------------------------------------------
*/
const createUser = asyncHandler(async (req, res) => {
  const { name, email, password } = req.body;

  if (!name || !email || !password) {
    throw new ValidationError(
      "Name, email and password are required"
    );
  }

  const user = await userService.createUser(req.body);

  return res.status(201).json({
    success: true,
    message: "User created successfully",
    data: user,
  });
});

/*
|--------------------------------------------------------------------------
| Get Logged In User Profile
|--------------------------------------------------------------------------
*/
const getProfile = asyncHandler(async (req, res) => {
  if (!req.user?.id) {
    throw new ValidationError("User ID is missing");
  }

  const user = await userService.getProfile(req.user.id);

  return res.status(200).json({
    success: true,
    data: user,
  });
});

/*
|--------------------------------------------------------------------------
| Update Profile
|--------------------------------------------------------------------------
*/
const updateProfile = asyncHandler(async (req, res) => {
  if (!req.user?.id) {
    throw new ValidationError("User ID is missing");
  }

  const updatedUser = await userService.updateProfile(
    req.user.id,
    req.body
  );

  return res.status(200).json({
    success: true,
    message: "Profile updated successfully",
    data: updatedUser,
  });
});

/*
|--------------------------------------------------------------------------
| Get All Users
|--------------------------------------------------------------------------
*/
const getAllUsers = asyncHandler(async (req, res) => {
  const users = await userService.getAllUsers();

  return res.status(200).json({
    success: true,
    count: users.length,
    data: users,
  });
});

/*
|--------------------------------------------------------------------------
| Get User By ID
|--------------------------------------------------------------------------
*/
const getUserById = asyncHandler(async (req, res) => {
  const { id } = req.params;

  if (!id) {
    throw new ValidationError("User ID is required");
  }

  const user = await userService.getUserById(id);

  return res.status(200).json({
    success: true,
    data: user,
  });
});

/*
|--------------------------------------------------------------------------
| Delete User
|--------------------------------------------------------------------------
*/
const deleteUser = asyncHandler(async (req, res) => {
  const { id } = req.params;

  if (!id) {
    throw new ValidationError("User ID is required");
  }

  await userService.deleteUser(id);

  return res.status(200).json({
    success: true,
    message: "User deleted successfully",
  });
});

module.exports = {
  createUser,
  getProfile,
  updateProfile,
  getAllUsers,
  getUserById,
  deleteUser,
};