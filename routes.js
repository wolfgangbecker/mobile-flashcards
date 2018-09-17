import { createMaterialTopTabNavigator, createStackNavigator } from 'react-navigation';

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

export default MainNavigator;