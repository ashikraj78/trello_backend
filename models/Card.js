var mongoose = require("mongoose");
var Schema = mongoose.Schema;
var List = require("../models/List");

var cardSchema = new Schema(
  {
    name: { type: String, required: true },
    member: { type: Schema.Types.ObjectId, ref: "User" },
    list: { type: Schema.Types.ObjectId, ref: "List" },
    label: { type: Schema.Types.ObjectId, ref: "Label" },
    board: { type: Schema.Types.ObjectId, ref: "Board" },
  },
  { timestamps: true }
);

cardSchema.pre("remove", async function (next) {
  try {
    await List.findByIdAndUpdate(this.list, { $pull: { card: this._id } });
  } catch (error) {
    next(error);
  }
});

module.exports = mongoose.model("Card", cardSchema);
