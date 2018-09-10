import { ADD_DECK } from "../actions/decks";
import { ADD_CARD } from "../actions/cards";

export function decks(state = {}, action) {
  switch (action.type) {
    case ADD_CARD:
      return {
        ...state,
        [action.deckId]: {
          ...state[action.deckId],
          cardIds: [
            ...state[action.deckId].cardIds,
            action.card.id
          ]
        }
      }
    case ADD_DECK:
      return {
        ...state,
        [action.deck.id]: {
          ...action.deck,
          cardIds: []
        },
      };
    default:
      return state;
  }
}