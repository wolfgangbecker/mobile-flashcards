// import { uuid } from 'react-native-uuid';

export const ADD_CARD = "ADD_CARD";

export const addCardActionCreator = (card, deckId) => ({
  type: ADD_CARD,
  card: {
    id: Math.random() * 1000000,
    ...card
  },
  deckId
});
