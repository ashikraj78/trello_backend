var express = require("express");
var router = express.Router();
var listController = require("../src/lists/listController");

/* CREATE lists  */
router.post("/", listController.createList);

/* GET lists listing. */
router.get("/", listController.listLists);
router.get("/:id", listController.showList);

/* UPDATE lists  */
router.put("/:id", listController.updateList);

/* DELETE lists  */
router.delete("/:id", listController.deleteList);

module.exports = router;
