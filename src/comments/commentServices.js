var Comment = require("../../models/Comment");

let commentServies = {
  createComment: async function (comment) {
    try {
      return await Comment.create(comment);
    } catch (error) {
      return error;
    }
  },
  listComments: async function () {
    try {
      return await Comment.find({});
    } catch (error) {
      return error;
    }
  },
  showComment: async function (commentId) {
    try {
      return await Comment.findById(commentId);
    } catch (error) {
      return error;
    }
  },
  updateComment: async function (commentId, comment) {
    try {
      return await Comment.findByIdAndUpdate(commentId, comment, { new: true });
    } catch (error) {
      return error;
    }
  },
  deleteComment: async function (commentId) {
    try {
      return await Comment.findByIdAndDelete(commentId);
    } catch (error) {
      return error;
    }
  },
};

module.exports = commentServies;
