var mongoose = require("mongoose");
var Schema = mongoose.Schema;

var commentSchema = new Schema(
  {
    name: { type: String, required: true },
    author: { type: Schema.Types.ObjectId, required: true, ref: "User" },
    card: { type: Schema.Types.ObjectId, required: true, ref: "Card" },
  },
  { timestamps: true }
);

module.exports = mongoose.model("Comment", commentSchema);
