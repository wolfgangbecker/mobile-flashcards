export const ADD_CARD = "ADD_CARD";

export const addCardActionCreator = (card, deckId) => ({
  type: ADD_CARD,
  card,
  deckId
});
