var Team = require("../../models/Team");
let Board = require("../../models/Board");
let List = require("../../models/List");
let Card = require("../../models/Card");

let teamServies = {
  createTeam: async function (team) {
    try {
      return await Team.create(team);
    } catch (error) {
      return error;
    }
  },
  listTeam: async function () {
    try {
      let team = await Team.find({}).populate("board").exec();
      return team;
    } catch (error) {
      return error;
    }
  },
  showTeam: async function (teamId) {
    try {
      let team = await Team.findById(teamId).populate("board").exec();
      return team;
    } catch (error) {
      return error;
    }
  },
  updateTeam: async function (teamId, team) {
    try {
      return await Team.findByIdAndUpdate(teamId, team, { new: true });
    } catch (error) {
      return error;
    }
  },
  deleteTeam: async function (teamId) {
    try {
      let team = await Team.findByIdAndDelete(teamId);
      await Board.deleteMany({ team: team._id });
      await List.deleteMany({ board: { $in: team.board } });
      await Card.deleteMany({ board: { $in: team.board } });
    } catch (error) {
      return error;
    }
  },
};

module.exports = teamServies;
