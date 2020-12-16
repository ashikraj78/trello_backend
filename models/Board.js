var mongoose = require("mongoose");
var Schema = mongoose.Schema;

var boardSchema = new Schema(
  {
    name: { type: String, required: true },
    team: { type: Schema.Types.ObjectId, required: true, ref: "Team" },
    imageURL: String,
    list: [{ type: Schema.Types.ObjectId, ref: "List" }],
  },
  { timestamps: true }
);

module.exports = mongoose.model("Board", boardSchema);
