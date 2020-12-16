var User = require("../../models/User");
var userServices = require("../../src/users/userServices");
var authService = require("../../src/auth/authService");

let authController = {
  loginUser: async function (req, res, next) {
    var { email, password } = req.body.user;
    try {
      var user = await userServices.showUserByField({
        email,
      });
      var isValidUser = user.validatePassword(req.body.user.password);
      var token = await authService.generateToken(user);
      console.log(token, "token");
      res.cookie("token", token, { httpOnly: true });
      return res.send({ user });
    } catch (error) {
      return error;
    }
  },
};

module.exports = authController;
