// src/modules/auth/auth.controller.js

const authService = require("./auth.service");

const asyncHandler = require(
  "../../common/middleware/asyncHandler"
);

const register = asyncHandler(
  async (req, res) => {
    const result =
      await authService.register(
        req.body
      );

    return res.status(201).json({
      success: true,
      token: result.token,
      user: result.user,
    });
  }
);

const login = asyncHandler(
  async (req, res) => {
    const result =
      await authService.login(
        req.body.email,
        req.body.password
      );

    return res.status(200).json({
      success: true,
      token: result.token,
      user: result.user,
    });
  }
);

const changePassword =
  asyncHandler(async (req, res) => {
    await authService.changePassword(
      req.user.id,
      req.body.currentPassword,
      req.body.newPassword
    );

    return res.status(200).json({
      success: true,
      message:
        "Password changed successfully",
    });
  });

  /*
|--------------------------------------------------------------------------
| Logout
|--------------------------------------------------------------------------
*/
const logout = asyncHandler(async (req, res) => {
  await authService.logout();

  return res.status(200).json({
    success: true,
    message: "Logout successful",
  });
});


module.exports = {
  register,
  login,
  logout,
  changePassword,
};