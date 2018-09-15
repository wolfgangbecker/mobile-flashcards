import React from "react";
import { StyleSheet, Text, View, TouchableOpacity } from "react-native";
import { connect } from 'react-redux';
import { Card } from "./Card";

export class Quiz extends React.Component {
  state = {
    index: 0,
    score: 0
  }

  submitAnswer = (correct) => {
    this.setState(prevState => ({
      score: correct ? prevState.score + 1 : prevState.score,
      index: prevState.index + 1
    }));
  }

  restartQuiz = () => {
    this.setState({
      index: 0,
      score: 0
    });
  }

  render() {
    const { cards, deck } = this.props;
    const { index, score } = this.state;

    if (index === cards.length) {
      return (
        <View>
          <Text style={styles.counter}>Score: {Math.round(score / cards.length * 100)}%</Text>
          <TouchableOpacity
            style={styles.button}
            onPress={this.restartQuiz}>
            <Text style={{ color: '#000' }}>Restart Quiz</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={[styles.button, { backgroundColor: "#000" }]}
            onPress={() => this.props.navigation.navigate("DeckDetail", { id: deck.id, title: deck.title })}>
            <Text style={{ color: '#fff' }}>Back to Deck</Text>
          </TouchableOpacity>
        </View>
      );
    }

    return (
      <View style={styles.container}>
        <Text style={styles.counter}>{index + 1}/{cards.length}</Text>
        <Card card={cards[index]} />
        <View style={styles.section}>
          <TouchableOpacity
            style={[styles.button, { backgroundColor: "#008000" }]}
            onPress={() => this.submitAnswer(true)}>
            <Text style={{ color: '#fff' }}>Correct</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={[styles.button, { backgroundColor: "#D4271B" }]}
            onPress={() => this.submitAnswer(false)}>
            <Text style={{ color: '#fff' }}>Incorrect</Text>
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
    backgroundColor: "#eee",
    borderColor: '#ddd',
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
    fontSize: 30
  },
  count: {
    fontSize: 20,
    color: '#888'
  },
  button: {
    width: 200,
    paddingVertical: 20,
    borderWidth: 1,
    borderRadius: 5,
    borderColor: '#222',
    alignItems: "center",
    marginBottom: 10
  }
});

function mapStateToProps({ decks, cards }, { navigation }) {
  const { deckId } = navigation.state.params;

  return {
    deck: decks[deckId],
    cards: decks[deckId].cardIds.map(cardId => cards[cardId])
  }
}

export default connect(mapStateToProps)(Quiz);