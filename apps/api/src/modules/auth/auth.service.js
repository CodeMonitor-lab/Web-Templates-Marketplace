// src/modules/auth/auth.service.js

const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");

const authRepository = require("./auth.repository");

const ValidationError = require(
  "../../shared/errors/ValidationError"
);

const UnauthorizedError = require(
  "../../shared/errors/UnauthorizedError"
);

const generateAccessToken = (user) => {
  return jwt.sign(
    {
      id: user._id,
      email: user.email,
      role: user.role,
    },
    process.env.JWT_SECRET,
    {
      expiresIn: "1d",
    }
  );
};

const register = async (payload) => {
  const existing =
    await authRepository.findByEmail(
      payload.email
    );

  if (existing) {
    throw new ValidationError(
      "Email already exists"
    );
  }

  const hashedPassword =
    await bcrypt.hash(payload.password, 10);

  const user =
    await authRepository.createUser({
      ...payload,
      password: hashedPassword,
    });

  return user;
};

const login = async (
  email,
  password
) => {
  const user =
    await authRepository.findByEmail(email);

  if (!user) {
    throw new UnauthorizedError(
      "Invalid credentials"
    );
  }

  const isMatch = await bcrypt.compare(
    password,
    user.password
  );

  if (!isMatch) {
    throw new UnauthorizedError(
      "Invalid credentials"
    );
  }

  const token =
    generateAccessToken(user);

  return {
    user,
    token,
  };
};

const changePassword = async (
  userId,
  currentPassword,
  newPassword
) => {
  const user =
    await authRepository.findById(userId);

  if (!user) {
    throw new UnauthorizedError(
      "User not found"
    );
  }

  const isMatch = await bcrypt.compare(
    currentPassword,
    user.password
  );

  if (!isMatch) {
    throw new UnauthorizedError(
      "Current password incorrect"
    );
  }

  const hashedPassword =
    await bcrypt.hash(newPassword, 10);

  await authRepository.updatePassword(
    userId,
    hashedPassword
  );

  return true;
};

/*
|--------------------------------------------------------------------------
| Logout
|--------------------------------------------------------------------------
*/
const logout = async () => {
  return true;
};

module.exports = {
  register,
  login,
  logout,
  changePassword,
  generateAccessToken,
};