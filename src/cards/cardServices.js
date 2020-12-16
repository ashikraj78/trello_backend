var Card = require("../../models/Card");

let cardServies = {
  createCard: async function (card) {
    try {
      return await Card.create(card);
    } catch (error) {
      return error;
    }
  },
  listCards: async function () {
    try {
      return await Card.find({});
    } catch (error) {
      return error;
    }
  },
  showCard: async function (cardId) {
    try {
      return await Card.findById(cardId);
    } catch (error) {
      return error;
    }
  },
  updateCard: async function (cardId, card) {
    try {
      return await Card.findByIdAndUpdate(cardId, card, { new: true });
    } catch (error) {
      return error;
    }
  },
  deleteCard: async function (cardId) {
    try {
      let card = await Card.findById(cardId);
      return await card.remove();
    } catch (error) {
      return error;
    }
  },
};

module.exports = cardServies;
