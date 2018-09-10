import React from "react";
import { StyleSheet, Text, View } from "react-native";
import { Provider } from 'react-redux';

import store from './src/store';
import { addCardActionCreator } from "./src/actions/cards";
import { addDeckActionCreator } from "./src/actions/decks";

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

export default class App extends React.Component {
  render() {
    return (
      <Provider store={store}>
        <View style={styles.container}>
          <Text>{JSON.stringify(store.getState())}</Text>
        </View>
      </Provider>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center"
  }
});
