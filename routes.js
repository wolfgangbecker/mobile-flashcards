import { createMaterialTopTabNavigator, createStackNavigator } from 'react-navigation';

import { white, lightGrey, green2, blue } from './src/styles/colors';
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
      headerTintColor: white,
      headerStyle: {
        backgroundColor: lightGrey
      }
    }
  },
  AddCard: {
    screen: AddCard,
    navigationOptions: {
      headerTintColor: white,
      headerTitle: 'Add Card',
      headerStyle: {
        backgroundColor: green2
      }
    }
  },
  Quiz: {
    screen: Quiz,
    navigationOptions: {
      headerTintColor: white,
      headerTitle: 'Quiz',
      headerStyle: {
        backgroundColor: blue
      }
    }
  }
});

export default MainNavigator;