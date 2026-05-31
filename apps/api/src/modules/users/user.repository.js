// src/modules/users/user.repository.js

const User = require("./user.model");

/*
|--------------------------------------------------------------------------
| Create User
|--------------------------------------------------------------------------
*/
const create = async (payload) => {
  return User.create(payload);
};

/*
|--------------------------------------------------------------------------
| Find All Users
|--------------------------------------------------------------------------
*/
const findAll = async () => {
  return User.find();
};

/*
|--------------------------------------------------------------------------
| Find User By ID
|--------------------------------------------------------------------------
*/
const findById = async (userId) => {
  return User.findById(userId);
};

/*
|--------------------------------------------------------------------------
| Find User By Email
|--------------------------------------------------------------------------
*/
const findByEmail = async (email) => {
  return User.findOne({ email });
};

/*
|--------------------------------------------------------------------------
| Update User By ID
|--------------------------------------------------------------------------
*/
const updateById = async (userId, payload) => {
  return User.findByIdAndUpdate(
    userId,
    payload,
    {
      new: true,
      runValidators: true,
    }
  );
};

/*
|--------------------------------------------------------------------------
| Delete User By ID
|--------------------------------------------------------------------------
*/
const deleteById = async (userId) => {
  return User.findByIdAndDelete(userId);
};

module.exports = {
  create,
  findAll,
  findById,
  findByEmail,
  updateById,
  deleteById,
};