import React from "react";
import { Provider } from 'react-redux';
import { createMaterialTopTabNavigator } from 'react-navigation';

import store from './src/store';
import { addCardActionCreator } from "./src/actions/cards";
import { addDeckActionCreator } from "./src/actions/decks";
import DeckList from "./src/components/DeckList";

store.dispatch(addDeckActionCreator({
  id: 'd_12345',
  title: 'React'
}));

store.dispatch(addDeckActionCreator({
  id: 'd_56789',
  title: 'JavaScript'
}));

store.dispatch(addCardActionCreator({
  id: 'c_12345',
  question: 'What is React',
  answer: 'A library for managing user interfaces'
},
  'd_12345'
));
store.dispatch(addCardActionCreator({
  id: 'c_98345',
  question: 'Where do you make Ajax requests in React?',
  answer: 'The componentDidMount lifecycle event'
},
  'd_56789'
));

const NavBar = createMaterialTopTabNavigator({
  Decks: DeckList
});

export default class App extends React.Component {
  render() {
    return (
      <Provider store={store}>
        <NavBar />
      </Provider>
    );
  }
}