var mongoose = require("mongoose");
var Schema = mongoose.Schema;

var teamSchema = new Schema(
  {
    name: { type: String, required: true },
    admin: { type: Schema.Types.ObjectId, required: true, ref: "User" },
    member: [{ type: Schema.Types.ObjectId, ref: "User" }],
    board: [{ type: Schema.Types.ObjectId, ref: "Board" }],
    description: { type: String },
  },
  { timestamps: true }
);

module.exports = mongoose.model("Team", teamSchema);
