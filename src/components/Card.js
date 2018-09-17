import React from "react";
import { StyleSheet, Text, View, TouchableOpacity } from "react-native";
import { grey, red } from "../styles/colors";

export class Card extends React.Component {
  state = {
    answerVisible: false
  }

  showAnswer = () => {
    this.setState({
      answerVisible: true
    });
  }

  componentWillReceiveProps() {
    this.setState({
      answerVisible: false
    });
  }

  render() {
    const { card } = this.props;
    const { answerVisible } = this.state;

    return (
      <View style={[styles.container]}>
        {answerVisible
          ? <Text style={styles.answer}>{card.answer}</Text>
          : (
            <View style={styles.container}>
              <Text style={styles.question}>{card.question}</Text>
              <TouchableOpacity onPress={this.showAnswer}>
                <Text style={styles.answerButton}>Answer</Text>
              </TouchableOpacity>
            </View>
          )
        }
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    padding: 20,
    alignItems: "center",
    justifyContent: "center",
    alignSelf: "stretch"
  },
  question: {
    fontSize: 30,
    textAlign: 'center'
  },
  answer: {
    fontSize: 20,
    color: grey,
    textAlign: 'center'
  },
  answerButton: {
    fontSize: 20,
    color: red
  },
});