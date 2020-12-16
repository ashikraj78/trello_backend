var express = require("express");
var router = express.Router();
var cardController = require("../src/cards/cardController");

/* CREATE cards  */
router.post("/", cardController.createCard);

/* GET cards listing. */
router.get("/", cardController.listCards);
router.get("/:id", cardController.showCard);

/* UPDATE cards  */
router.put("/:id", cardController.updateCard);

/* DELETE cards  */
router.delete("/:id", cardController.deleteCard);

module.exports = router;
