import { AsyncStorage } from 'react-native';

const STATE_KEY = "@MobileFlashcards:notifications";

export const loadState = () => {
  try {
    const serializedState = AsyncStorage.getItem(STATE_KEY);
    if (serializedState === null) {
      return undefined;
    }
    return JSON.parse(serializedState);
  } catch (error) {
    return undefined;
  }
}

export const saveState = (state) => {
  try {
    const serializedState = JSON.stringify(state);
    AsyncStorage.setItem(STATE_KEY, serializedState);
  } catch (error) {
    console.warn('Unable to save to storage');
  }
}