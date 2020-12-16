var mongoose = require("mongoose");
var Schema = mongoose.Schema;
var bcrypt = require("bcryptjs");

var userSchema = new Schema(
  {
    name: { type: String, required: true },
    email: { type: String, required: true, unique: true },
    password: { type: String, required: true },
    imageURL: String,
    bio: String,
    team: [{ type: Schema.Types.ObjectId, ref: "Team" }],
  },
  { timestamps: true }
);
userSchema.pre("save", function (next) {
  if (this.password && this.isModified("password")) {
    // this.password = bcrypt.hashSync(this.password, 10);
    var salt = bcrypt.genSaltSync(10);
    this.password = bcrypt.hashSync(this.password, salt);
  }
  next();
});

userSchema.methods.validatePassword = function (password) {
  return bcrypt.compareSync(password, this.password);
};

userSchema.methods.toJSON = function () {
  var userObj = this.toObject();
  delete userObj.password;
  return userObj;
};

module.exports = mongoose.model("User", userSchema);
