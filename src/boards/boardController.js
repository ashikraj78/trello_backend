let boardServies = require("./boardServices");
let teamServices = require("../teams/teamsServices");

let boardController = {
  createBoard: async function (req, res) {
    const board = req.body.board;
    if (!board.name || !board.team) {
      res.status(400).json({ msg: "name, team is required" });
    }
    try {
      const createBoard = await boardServies.createBoard(board);
      let boardId = createBoard._id;
      let teamId = createBoard.team;
      const updateTeam = await teamServices.updateTeam(teamId, {
        $push: { board: boardId },
      });

      return res.status(201).json({ board: createBoard.toJSON() });
    } catch (error) {
      res.status(500).json({ msg: "Something went wrong" });
    }
  },
  listBoards: async function (req, res, next) {
    try {
      const listBoards = await boardServies.listBoards();
      return res.json({ boards: listBoards });
    } catch (error) {
      next(error);
    }
  },
  showBoard: async function (req, res, next) {
    const id = req.params.id;
    try {
      let board = await boardServies.showBoard(id);
      console.log(board, "find the board");
      return res.json({ board });
    } catch (error) {
      next(error);
    }
  },
  updateBoard: async function (req, res, next) {
    let id = req.params.id;
    let board = req.body.board;

    try {
      const updateBoard = await boardServies.updateBoard(id, board);
      return res.json({ board: updateBoard });
    } catch (error) {
      next(error);
    }
  },
  deleteBoard: async function (req, res, next) {
    let id = req.params.id;

    try {
      const deleteBoard = await boardServies.deleteBoard(id);
      return res.status(201).json({ msg: "Board has been deleted" });
    } catch (error) {
      next(error);
    }
  },
  updateTeamBoard: async function (req, res, next) {
    let boardId = req.params.id;
    let teamId = req.body.board.team;

    try {
      const updateTeam = await teamServices.updateTeam(teamId, {
        $push: { board: boardId },
      });
    } catch (error) {}
  },
};

module.exports = boardController;
