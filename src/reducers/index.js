import { combineReducers } from 'redux'

import { cards } from './cards';
import { decks } from './decks';

const reducers = combineReducers({
  cards,
  decks
})

export default reducers;