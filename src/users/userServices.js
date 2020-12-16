var User = require("../../models/User");

let userServies = {
  createUser: async function (user) {
    try {
      return await User.create(user);
    } catch (error) {
      return error;
    }
  },
  listUsers: async function () {
    try {
      return await User.find({});
    } catch (error) {
      return error;
    }
  },
  showUser: async function (userId) {
    try {
      let user = await User.findById(userId);
      return user;
    } catch (error) {
      return error;
    }
  },
  showUserByField: async function (field) {
    try {
      return await User.findOne(field);
    } catch (error) {
      return error;
    }
  },
  updateUser: async function (userId, user) {
    try {
      return await User.findByIdAndUpdate(userId, user, { new: true });
    } catch (error) {
      return error;
    }
  },
  deleteUser: async function (userId) {
    try {
      return await User.findByIdAndDelete(userId);
    } catch (error) {
      return error;
    }
  },
};

module.exports = userServies;
