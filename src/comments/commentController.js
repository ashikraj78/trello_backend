let commentServies = require("./commentServices");

let commentController = {
  createComment: async function (req, res) {
    const comment = req.body.comment;
    if (!comment.name || !comment.member || !comment.list) {
      res.status(400).json({ msg: "name, member, list is required" });
    }
    try {
      const createComment = await commentServies.createComment(comment);
      return res.status(201).json({ msg: "Comment created sucessfully" });
    } catch (error) {
      res.status(500).json({ msg: "Something went wrong" });
    }
  },
  listComments: async function (req, res, next) {
    try {
      const listComments = await commentServies.listComments();
      return res.json({ comments: listComments });
    } catch (error) {
      next(error);
    }
  },
  showComment: async function (req, res, next) {
    const id = req.params.id;
    try {
      let comment = await commentServies.showComment(id);
      return res.json({ comment });
    } catch (error) {
      next(error);
    }
  },
  updateComment: async function (req, res, next) {
    let id = req.params.id;
    let comment = req.body.comment;

    try {
      const updateComment = await commentServies.updateComment(id, comment);
      return res.json({ comment: updateComment });
    } catch (error) {
      next(error);
    }
  },
  deleteComment: async function (req, res, next) {
    let id = req.params.id;

    try {
      const deleteComment = await commentServies.deleteComment(id);
      return res.status(201).json({ msg: "Comment has been deleted" });
    } catch (error) {
      next(error);
    }
  },
};

module.exports = commentController;
