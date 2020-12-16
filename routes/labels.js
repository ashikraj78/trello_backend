var express = require("express");
var router = express.Router();
var labelController = require("../src/labels/labelController");

/* CREATE labels  */
router.post("/", labelController.createLabel);

/* GET labels listing. */
router.get("/", labelController.listLabels);
router.get("/:id", labelController.showLabel);

/* UPDATE labels  */
router.put("/:id", labelController.updateLabel);

/* DELETE labels  */
router.delete("/:id", labelController.deleteLabel);

module.exports = router;
