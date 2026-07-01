// src/modules/auth/auth.controller.js
const authService = require("./auth.service");
const userMapper = require("../users/user.mapper");
const apiResponse = require("../../shared/utils/apiResponse");
const httpStatus = require("../../shared/constants/httpStatus");
const config = require("../../config/env");
const { ValidationError } = require("../../shared/errors");
const { AUTH_MESSAGES } = require("./auth.constants");

const register = async (req, res) => {
  const { user, token } = await authService.register(req.body);
  
  return res.status(httpStatus.CREATED || 201).json(
    apiResponse.success(AUTH_MESSAGES.REGISTRATION_SUCCESS, {
      user: userMapper.toResponse(user),
      token,
    })
  );
};

const login = async (req, res) => {
  const { email, password } = req.body;
  const { user, token } = await authService.login(email, password);

  return res.status(httpStatus.OK || 200).json(
    apiResponse.success(AUTH_MESSAGES.LOGIN_SUCCESS, {
      user: userMapper.toResponse(user),
      token,
    })
  );
};

const forgotPassword = async (req, res) => {
  const { email } = req.body;
  const rawToken = await authService.forgotPassword(email);

  const resetUrl = `${config.CLIENT_URL}/reset-password?token=${rawToken}`;
  
  if (config.NODE_ENV === "development" && rawToken) {
    console.log(`\n============== 📬 DEV PASSWORD RESET LINK ==============`);
    console.log(`URL: ${resetUrl}`);
    console.log(`========================================================\n`);
  }

  return res.status(httpStatus.OK || 200).json(
    apiResponse.success("If that email address exists, a verification link has been dispatched.")
  );
};

const resetPassword = async (req, res) => {
  const { token } = req.query;
  const { password } = req.body;

  if (!token) {
    throw new ValidationError("Verification validation token parameter missing from query criteria.");
  }

  const { user, token: authToken } = await authService.resetPassword(token, password);

  return res.status(httpStatus.OK || 200).json(
    apiResponse.success("Your password security metrics have updated successfully.", {
      user: userMapper.toResponse(user),
      token: authToken,
    })
  );
};

module.exports = {
  register,
  login,
  forgotPassword,
  resetPassword,
};