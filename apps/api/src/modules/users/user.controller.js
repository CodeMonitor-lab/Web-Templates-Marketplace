// src/modules/users/user.controller.js
const userService = require("./user.service");
const userMapper = require("./user.mapper");
const apiResponse = require("../../shared/utils/apiResponse");
const httpStatus = require("../../shared/constants/httpStatus");

const getProfile = async (req, res) => {
  // req.user.id is injected directly by your core secure "auth" middleware validation gate
  const user = await userService.getProfile(req.user.id);
  
  return res.status(httpStatus.OK || 200).json(
    apiResponse.success("User profile fetched successfully.", userMapper.toResponse(user))
  );
};

const updateProfile = async (req, res) => {
  const updatedUser = await userService.updateProfile(req.user.id, req.body);
  
  return res.status(httpStatus.OK || 200).json(
    apiResponse.success("Profile records updated successfully.", userMapper.toResponse(updatedUser))
  );
};

const updatePassword = async (req, res) => {
  const { currentPassword, newPassword } = req.body;
  await userService.changePassword(req.user.id, currentPassword, newPassword);
  
  return res.status(httpStatus.OK || 200).json(
    apiResponse.success("Your profile password security configuration updated successfully.")
  );
};

module.exports = {
  getProfile,
  updateProfile,
  updatePassword,
};