var mongoose = require("mongoose");
var Schema = mongoose.Schema;

var labelSchema = new Schema(
  {
    name: { type: String, required: true },
    board: { type: Schema.Types.ObjectId, required: true, ref: "Board" },
  },
  { timestamps: true }
);

module.exports = mongoose.model("Label", labelSchema);
