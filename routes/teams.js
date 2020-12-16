var express = require("express");
var router = express.Router();
var teamController = require("../src/teams/teamController");

/* CREATE team  */
router.post("/", teamController.createTeam);

/* GET team listing. */
router.get("/", teamController.listTeam);
router.get("/:id", teamController.showTeam);

/* UPDATE team  */
router.put("/:id", teamController.updateTeam);

/* DELETE team  */
router.delete("/:id", teamController.deleteTeam);

module.exports = router;
