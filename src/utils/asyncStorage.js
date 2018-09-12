import { AsyncStorage } from 'react-native';

export const loadState = () => {
  try {
    const serializedState = AsyncStorage.getItem('@MobileFlashcards:state');
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
    AsyncStorage.setItem('@MobileFlashcards:state', serializedState);
  } catch (error) {
    console.warn('Unable to save to storage');
  }
}