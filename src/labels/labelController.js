let labelServies = require("./labelServices");

let labelController = {
  createLabel: async function (req, res) {
    const label = req.body.label;
    if (!label.name || !label.board) {
      res.status(400).json({ msg: "name, board is required" });
    }
    try {
      const createLabel = await labelServies.createLabel(label);
      return res.status(201).json({ msg: "Label created sucessfully" });
    } catch (error) {
      res.status(500).json({ msg: "Something went wrong" });
    }
  },
  listLabels: async function (req, res, next) {
    try {
      const listLabels = await labelServies.listLabels();
      return res.json({ labels: listLabels });
    } catch (error) {
      next(error);
    }
  },
  showLabel: async function (req, res, next) {
    const id = req.params.id;
    try {
      let label = await labelServies.showLabel(id);
      return res.json({ label });
    } catch (error) {
      next(error);
    }
  },
  updateLabel: async function (req, res, next) {
    let id = req.params.id;
    let label = req.body.label;

    try {
      const updateLabel = await labelServies.updateLabel(id, label);
      return res.json({ label: updateLabel });
    } catch (error) {
      next(error);
    }
  },
  deleteLabel: async function (req, res, next) {
    let id = req.params.id;

    try {
      const deleteLabel = await labelServies.deleteLabel(id);
      return res.status(201).json({ msg: "Label has been deleted" });
    } catch (error) {
      next(error);
    }
  },
};

module.exports = labelController;
