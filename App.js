import React from "react";
import { View, Text, StyleSheet, StatusBar } from "react-native";
import { Provider } from 'react-redux';
import { createMaterialTopTabNavigator, createStackNavigator } from 'react-navigation';
import { Constants } from 'expo';

import store from './src/store';
import { addCardActionCreator } from "./src/actions/cards";
import { addDeckActionCreator } from "./src/actions/decks";
import { setLocalNotification } from "./src/utils/notifications";
import { green } from "./src/styles/colors";
import DeckList from "./src/components/DeckList";
import DeckDetail from "./src/components/DeckDetail";
import AddCard from "./src/components/AddCard";
import NewDeck from "./src/components/NewDeck";
import Quiz from "./src/components/Quiz";

const NavBar = createMaterialTopTabNavigator({
  Decks: {
    screen: DeckList,
    navigationOptions: {
      tabBarLabel: "Decks"
    }
  },
  NewDeck: {
    screen: NewDeck,
    navigationOptions: {
      tabBarLabel: "New Deck"
    }
  }
});

const MainNavigator = createStackNavigator({
  Home: {
    screen: NavBar,
    navigationOptions: { header: null }
  },
  DeckDetail: {
    screen: DeckDetail,
    navigationOptions: {
      headerTintColor: '#fff',
      headerStyle: {
        backgroundColor: '#ccc'
      }
    }
  },
  AddCard: {
    screen: AddCard,
    navigationOptions: {
      headerTintColor: '#fff',
      headerTitle: 'Add Card',
      headerStyle: {
        backgroundColor: '#1f1'
      }
    }
  },
  Quiz: {
    screen: Quiz,
    navigationOptions: {
      headerTintColor: '#fff',
      headerTitle: 'Quiz',
      headerStyle: {
        backgroundColor: '#11f'
      }
    }
  }
});

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
    backgroundColor: "#fff"
  }
});
