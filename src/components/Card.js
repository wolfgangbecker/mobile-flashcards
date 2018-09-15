import React from "react";
import { StyleSheet, Text, View, TouchableOpacity } from "react-native";
import { connect } from 'react-redux';

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
      <View>
        {answerVisible
          ? <Text>{card.answer}</Text>
          : (
            <View>
              <Text>{card.question}</Text>
              <TouchableOpacity onPress={this.showAnswer}>
                <Text>Answer</Text>
              </TouchableOpacity>
            </View>
          )
        }
      </View>
    )
  }
}