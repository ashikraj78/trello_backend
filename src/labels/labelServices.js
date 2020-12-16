var Label = require("../../models/Label");

let labelServies = {
  createLabel: async function (label) {
    try {
      return await Label.create(label);
    } catch (error) {
      return error;
    }
  },
  listLabels: async function () {
    try {
      return await Label.find({});
    } catch (error) {
      return error;
    }
  },
  showLabel: async function (labelId) {
    try {
      return await Label.findById(labelId);
    } catch (error) {
      return error;
    }
  },
  updateLabel: async function (labelId, label) {
    try {
      return await Label.findByIdAndUpdate(labelId, label, { new: true });
    } catch (error) {
      return error;
    }
  },
  deleteLabel: async function (labelId) {
    try {
      return await Label.findByIdAndDelete(labelId);
    } catch (error) {
      return error;
    }
  },
};

module.exports = labelServies;
