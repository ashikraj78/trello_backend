var express = require("express");
var router = express.Router();
var commentController = require("../src/comments/commentController");

/* CREATE comments  */
router.post("/", commentController.createComment);

/* GET comments listing. */
router.get("/", commentController.listComments);
router.get("/:id", commentController.showComment);

/* UPDATE comments  */
router.put("/:id", commentController.updateComment);

/* DELETE comments  */
router.delete("/:id", commentController.deleteComment);

module.exports = router;
