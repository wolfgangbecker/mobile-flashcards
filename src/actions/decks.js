import { generateId } from "../utils/helpers";

export const ADD_DECK = "ADD_DECK";

export const addDeckActionCreator = (deck) => ({
  type: ADD_DECK,
  deck: {
    id: generateId(),
    ...deck
  }
});