var jwt = require("jsonwebtoken");

let authServices = {
  generateToken: async function (user) {
    let randomsecret = process.env.RANDOMSECRET;
    return jwt.sign({ _id: user._id }, randomsecret);
  },
};
module.exports = authServices;
