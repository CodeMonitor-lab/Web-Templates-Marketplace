// src/modules/users/user.controller.js

const userService = require("./user.service");
const userMapper = require("./user.mapper");
const asyncHandler = require("../../common/middleware/asyncHandler");

/*
|--------------------------------------------------------------------------
| Create User
|--------------------------------------------------------------------------
*/
const createUser = asyncHandler(async (req, res) => {
  const user = await userService.createUser(req.body);

  return res.status(201).json({
    success: true,
    message: "User created successfully",
    data: userMapper.toPublic(user),
  });
});

/*
|--------------------------------------------------------------------------
| Get Logged In User Profile
|--------------------------------------------------------------------------
*/
const getProfile = asyncHandler(async (req, res) => {
  const user = await userService.getProfile(req.user.id);

  return res.status(200).json({
    success: true,
    data: userMapper.toPublic(user),
  });
});

/*
|--------------------------------------------------------------------------
| Update Profile
|--------------------------------------------------------------------------
*/
const updateProfile = asyncHandler(async (req, res) => {
  const updatedUser = await userService.updateProfile(
    req.user.id,
    req.body
  );

  return res.status(200).json({
    success: true,
    message: "Profile updated successfully",
    data: userMapper.toPublic(updatedUser),
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
    data: userMapper.toList(users),
  });
});

/*
|--------------------------------------------------------------------------
| Get User By ID
|--------------------------------------------------------------------------
*/
const getUserById = asyncHandler(async (req, res) => {
  const user = await userService.getUserById(req.params.id);

  return res.status(200).json({
    success: true,
    data: userMapper.toPublic(user),
  });
});

/*
|--------------------------------------------------------------------------
| Delete User
|--------------------------------------------------------------------------
*/
const deleteUser = asyncHandler(async (req, res) => {
  await userService.deleteUser(req.params.id);

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