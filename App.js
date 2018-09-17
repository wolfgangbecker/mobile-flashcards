import React from "react";
import { View, StyleSheet, StatusBar } from "react-native";
import { Provider } from 'react-redux';
import { Constants } from 'expo';

import store from './src/store';
import { setLocalNotification } from "./src/utils/notifications";
import { green, white } from "./src/styles/colors";
import MainNavigator from "./routes";

function FlashcardsStatusBar({ backgroundColor, ...props }) {
  return (
    <View style={{ backgroundColor, height: Constants.statusBarHeight }}>
      <StatusBar translucent backgroundColor={backgroundColor} {...props} />
    </View>
  );
}

export default class App extends React.Component {
  componentDidMount() {
    setLocalNotification();
  }

  render() {
    return (
      <Provider store={store}>
        <View style={styles.container}>
          <FlashcardsStatusBar backgroundColor={green} barStyle='dark-content' />
          <MainNavigator />
        </View>
      </Provider>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: white
  }
});
