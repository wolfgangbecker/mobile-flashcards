import React from "react";
import { StyleSheet, Text, View, TouchableOpacity } from "react-native";
import { connect } from 'react-redux';
import { white, lightGrey2, lightGrey3, grey, darkGrey, black } from "../styles/colors";

export class DeckDetail extends React.Component {
  static navigationOptions = ({ navigation }) => {
    return {
      title: navigation.state.params.title
    };
  };

  render() {
    const { deck } = this.props;

    return (
      <View style={styles.container}>
        <View style={styles.section}>
          <Text style={styles.title}>{deck.title}</Text>
          <Text style={styles.count}>{deck.cardIds.length} cards</Text>
        </View>
        <View style={styles.section}>
          <TouchableOpacity
            style={styles.button}
            onPress={() => this.props.navigation.navigate("AddCard", { deckId: deck.id })}>
            <Text>Add Card</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={[styles.button, { backgroundColor: black }]}
            onPress={() => this.props.navigation.navigate("Quiz", { deckId: deck.id })}>
            <Text style={{ color: white }}>Start Quiz</Text>
          </TouchableOpacity>
        </View>
      </View >
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginRight: 5,
    marginLeft: 5,
    marginTop: 2.5,
    marginBottom: 2.5,
    backgroundColor: lightGrey3,
    borderColor: lightGrey2,
    borderWidth: 1,
    borderRadius: 5,
    alignItems: "center",
    justifyContent: "center"
  },
  section: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  title: {
    fontSize: 30,
    textAlign: "center"
  },
  count: {
    fontSize: 20,
    color: grey
  },
  button: {
    width: 200,
    paddingVertical: 20,
    borderWidth: 1,
    borderRadius: 5,
    borderColor: darkGrey,
    alignItems: "center",
    marginBottom: 10
  }
});

function mapStateToProps({ decks }, { navigation }) {
  const { id } = navigation.state.params;

  return {
    deck: decks[id]
  }
}

export default connect(mapStateToProps)(DeckDetail);