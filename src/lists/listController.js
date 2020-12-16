let listServies = require("./listServices");
let boardServices = require("../boards/boardServices");

let listController = {
  createList: async function (req, res) {
    const list = req.body.list;
    if (!list.name || !list.board) {
      res.status(400).json({ msg: "name and board is required" });
    }
    try {
      const createList = await listServies.createList(list);
      let listId = createList._id;
      let boardId = createList.board;
      const updateBoard = await boardServices.updateBoard(boardId, {
        $push: { list: listId },
      });

      return res.status(201).json({ list: createList.toJSON() });
    } catch (error) {
      res.status(500).json({ msg: "Something went wrong" });
    }
  },
  listLists: async function (req, res, next) {
    try {
      const listLists = await listServies.listLists();
      return res.json({ lists: listLists });
    } catch (error) {
      next(error);
    }
  },
  showList: async function (req, res, next) {
    const id = req.params.id;
    try {
      let list = await listServies.showList(id);
      return res.json({ list });
    } catch (error) {
      next(error);
    }
  },
  updateList: async function (req, res, next) {
    let id = req.params.id;
    let list = req.body.list;

    try {
      const updateList = await listServies.updateList(id, list);
      return res.json({ list: updateList });
    } catch (error) {
      next(error);
    }
  },
  deleteList: async function (req, res, next) {
    let id = req.params.id;

    try {
      const deleteList = await listServies.deleteList(id);
      return res.status(201).json({ msg: "List has been deleted" });
    } catch (error) {
      next(error);
    }
  },
};

module.exports = listController;
