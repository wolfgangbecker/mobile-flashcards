// import { uuid } from 'react-native-uuid';

export const ADD_DECK = "ADD_DECK";

export const addDeckActionCreator = (deck) => ({
  type: ADD_DECK,
  deck: {
    id: Math.random() * 1000000,
    ...deck
  }
});