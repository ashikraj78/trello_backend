let teamServies = require("./teamsServices");

let teamController = {
  createTeam: async function (req, res) {
    const team = req.body.team;
    team.admin = req.user._id;

    if (!team.name || !team.admin) {
      res.status(400).json({ msg: "name and admin is required" });
    }
    try {
      const createTeam = await teamServies.createTeam(team);
      return res.status(201).json({ team: createTeam.toJSON() });
    } catch (error) {
      res.status(500).json({ msg: "Something went wrong" });
    }
  },
  listTeam: async function (req, res, next) {
    try {
      const listTeam = await teamServies.listTeam();
      return res.json({ team: listTeam });
    } catch (error) {
      next(error);
    }
  },
  showTeam: async function (req, res, next) {
    const id = req.params.id;
    try {
      let team = await teamServies.showTeam(id);
      return res.json({ team });
    } catch (error) {
      next(error);
    }
  },
  updateTeam: async function (req, res, next) {
    let id = req.params.id;
    let team = req.body.team;

    try {
      const updateTeam = await teamServies.updateTeam(id, team);
      return res.json({ team: updateTeam });
    } catch (error) {
      next(error);
    }
  },
  deleteTeam: async function (req, res, next) {
    let id = req.params.id;

    try {
      const deleteTeam = await teamServies.deleteTeam(id);
      return res.status(201).json({ msg: "Team has been deleted" });
    } catch (error) {
      next(error);
    }
  },
};

module.exports = teamController;
