import React from "react";
import { StyleSheet, Text, View, TouchableOpacity } from "react-native";
import { connect } from 'react-redux';

import { Card } from "./Card";
import { QuizResult } from "./QuizResult";

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

  backToDeck = () => {
    const { deck, navigation } = this.props;

    navigation.navigate("DeckDetail", { id: deck.id, title: deck.title });
  }

  render() {
    const { cards } = this.props;
    const { index, score } = this.state;

    // Show results
    if (index === cards.length) {
      return <QuizResult
        score={score}
        numberOfCards={cards.length}
        restart={this.restartQuiz}
        backToDeck={this.backToDeck} />;
    }

    // Show next card
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
  counter: {
    fontSize: 20,
    alignSelf: "flex-start"
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