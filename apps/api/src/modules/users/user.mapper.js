// src/modules/users/user.mapper.js

/**
 * Data Transformer Matrix Layer
 * Strips security identifiers out of payloads so DB details are never exposed to clients
 */
const toResponse = (user) => {
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

module.exports = {
  toResponse,
};