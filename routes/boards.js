var express = require("express");
var router = express.Router();
var boardController = require("../src/boards/boardController");

/* CREATE boards  */
router.post("/", boardController.createBoard);

/* GET boards listing. */
router.get("/", boardController.listBoards);
router.get("/:id", boardController.showBoard);

/* UPDATE boards  */
router.put("/:id", boardController.updateBoard);

/* DELETE boards  */
router.delete("/:id", boardController.deleteBoard);

module.exports = router;
