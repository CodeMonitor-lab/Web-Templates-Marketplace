// src/modules/users/user.repository.js

const User = require("./user.model");

/*
|--------------------------------------------------------------------------
| Create User
|--------------------------------------------------------------------------
*/
const create = async (payload) => {
  return await User.create(payload);
};

/*
|--------------------------------------------------------------------------
| Find All Users
|--------------------------------------------------------------------------
*/
const findAll = async () => {
  return await User.find().select("-password");
};

/*
|--------------------------------------------------------------------------
| Find User By ID
|--------------------------------------------------------------------------
*/
const findById = async (userId) => {
  return await User.findById(userId).select("-password");
};

/*
|--------------------------------------------------------------------------
| Find User By Email
|--------------------------------------------------------------------------
*/
const findByEmail = async (email) => {
  return await User.findOne({ email });
};

/*
|--------------------------------------------------------------------------
| Update User By ID
|--------------------------------------------------------------------------
*/
const updateById = async (userId, payload) => {
  return await User.findByIdAndUpdate(
    userId,
    payload,
    {
      new: true,
      runValidators: true,
    }
  ).select("-password");
};

/*
|--------------------------------------------------------------------------
| Delete User By ID
|--------------------------------------------------------------------------
*/
const deleteById = async (userId) => {
  return await User.findByIdAndDelete(userId);
};

module.exports = {
  create,
  findAll,
  findById,
  findByEmail,
  updateById,
  deleteById,
};