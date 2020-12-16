let cardServies = require("./cardServices");
let listServices = require("../lists/listServices");

let cardController = {
  createCard: async function (req, res) {
    const card = req.body.card;
    if (!card.name) {
      res.status(400).json({ msg: "name, member, list is required" });
    }
    try {
      const createCard = await cardServies.createCard(card);
      let cardId = createCard._id;
      let listId = createCard.list;
      const updateList = await listServices.updateList(listId, {
        $push: { card: cardId },
      });
      return res.status(201).json({ card: createCard.toJSON() });
    } catch (error) {
      res.status(500).json({ msg: "Something went wrong" });
    }
  },
  listCards: async function (req, res, next) {
    try {
      const listCards = await cardServies.listCards();
      return res.json({ cards: listCards });
    } catch (error) {
      next(error);
    }
  },
  showCard: async function (req, res, next) {
    const id = req.params.id;
    try {
      let card = await cardServies.showCard(id);
      return res.json({ card });
    } catch (error) {
      next(error);
    }
  },
  updateCard: async function (req, res, next) {
    let id = req.params.id;
    let card = req.body.card;

    try {
      const updateCard = await cardServies.updateCard(id, card);
      return res.json({ card: updateCard });
    } catch (error) {
      next(error);
    }
  },
  deleteCard: async function (req, res, next) {
    let id = req.params.id;

    try {
      const deleteCard = await cardServies.deleteCard(id);
      return res.status(201).json({ card: deleteCard });
    } catch (error) {
      next(error);
    }
  },
};

module.exports = cardController;
