import { createStore } from "redux";
import reducers from './reducers';
import { loadState, saveState } from './utils/asyncStorage';

const persistedState = loadState();
const store = createStore(reducers, persistedState);

store.subscribe(() => {
  saveState(store.getState());
});

export default store;