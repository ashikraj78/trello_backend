var List = require("../../models/List");
var Card = require("../../models/Card");
var Board = require("../../models/Board");

let listServies = {
  createList: async function (list) {
    try {
      return await List.create(list);
    } catch (error) {
      return error;
    }
  },
  listLists: async function () {
    try {
      return await List.find({}).populate("card").exec();
    } catch (error) {
      return error;
    }
  },
  showList: async function (listId) {
    try {
      return await List.findById(listId).populate("card").exec();
    } catch (error) {
      return error;
    }
  },
  updateList: async function (listId, list) {
    try {
      return await List.findByIdAndUpdate(listId, list, { new: true });
    } catch (error) {
      return error;
    }
  },
  deleteList: async function (listId) {
    try {
      let list = await List.findByIdAndRemove(listId);
      await Card.deleteMany({ list: list._id });
      await Board.findByIdAndUpdate(list.board, {
        $pull: { list: list._id },
      });
    } catch (error) {
      return error;
    }
  },
  // deleteList: async function (listId) {
  //   try {
  //     let list = await List.findById(listId);
  //     return await list.remove();
  //     // var deletedList = await list.remove();
  //     // console.log(deletedList);
  //     // return deleteList;
  //     // console.log(list);
  //   } catch (error) {
  //     return error;
  //   }
  // },
};

module.exports = listServies;
