var Board = require("../../models/Board");
var Team = require("../../models/Team");
var List = require("../../models/List");
var Card = require("../../models/Card");

let boardServies = {
  createBoard: async function (board) {
    try {
      return await Board.create(board);
    } catch (error) {
      return error;
    }
  },
  listBoards: async function () {
    try {
      let board = await Board.find({}).populate(["team", "list"]).exec();
      return board;
    } catch (error) {
      return error;
    }
  },
  showBoard: async function (boardId) {
    try {
      let board = await Board.findById(boardId)
        .populate(["team", "list"])
        .exec();
      return board;
    } catch (error) {
      return error;
    }
  },
  updateBoard: async function (boardId, board) {
    try {
      return await Board.findByIdAndUpdate(boardId, board, { new: true });
    } catch (error) {
      return error;
    }
  },
  deleteBoard: async function (boardId) {
    try {
      let board = await Board.findByIdAndDelete(boardId);
      await Team.findByIdAndUpdate(board.team, { $pull: { board: board._id } });
      await List.deleteMany({ board: board._id });
      await Card.deleteMany({ list: { $in: board.list } });
      console.log(list);
    } catch (error) {
      return error;
    }
  },
};

module.exports = boardServies;
