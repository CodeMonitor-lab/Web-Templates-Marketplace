// src/modules/users/user.mapper.js

const toPublic = (user) => {
  if (!user) return null;

  return {
    id: user._id,
    name: user.name,
    email: user.email,
    role: user.role,
    avatar: user.avatar,
    isVerified: user.isVerified,
    createdAt: user.createdAt,
    updatedAt: user.updatedAt,
  };
};

const toList = (users = []) =>
  users.map(toPublic);

module.exports = {
  toPublic,
  toList,
};