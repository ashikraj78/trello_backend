var mongoose = require("mongoose");
var Schema = mongoose.Schema;
var Card = require("./Card");
var Board = require("./Board");

var listSchema = new Schema(
  {
    name: { type: String, required: true },
    board: { type: Schema.Types.ObjectId, required: true, ref: "Board" },
    // team: { type: Schema.Types.ObjectId, required: true, ref: "Team" },
    card: [{ type: Schema.Types.ObjectId, ref: "Card" }],
  },
  { timestamps: true }
);

// listSchema.pre("remove", async function (next) {
//   try {
//     console.log("where is card");
//     await Board.findByIdAndUpdate(this.board, {
//       $pull: { list: this._id },
//     });
//     await Card.deleteMany({ list: this._id });
//     // let card = await Card.remove({ _id: { $in: this.card } });
//     next();
//   } catch (error) {
//     next(error);
//   }
// });

// listSchema.pre("remove", function (next) {
//   console.log("where is card");
//   Board.findByIdAndUpdate(
//     this.board,
//     { $pull: { list: this._id } },
//     (err, board) => {
//       this.model("Card").remove({ list: this._id }, (err, card) => {
//         next();
//       });
//     }
//   );
// });

module.exports = mongoose.model("List", listSchema);
