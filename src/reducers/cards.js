import { ADD_CARD } from "../actions/cards";

export function cards(state = {}, action) {
  switch (action.type) {
    case ADD_CARD:
      return {
        ...state,
        [action.card.id]: action.card
      };
    default:
      return state;
  }
}