// src/modules/users/user.repository.js
const User = require("./user.model");

const findById = async (id, includePassword = false) => {
  const query = User.findById(id);
  if (includePassword) query.select("+password");
  return query;
};

const updateById = async (id, updatePayload) => {
  return User.findByIdAndUpdate(
    id,
    { $set: updatePayload },
    { new: true, runValidators: true }
  );
};

module.exports = {
  findById,
  updateById,
};