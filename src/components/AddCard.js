import React from "react";
import { KeyboardAvoidingView, TextInput, Text, TouchableOpacity } from "react-native";
import { connect } from 'react-redux';

import { addCardActionCreator } from "../actions/cards";
import formStyles from "../styles/forms";
import { white } from "../styles/colors";

export class AddCard extends React.Component {
  state = {
    question: '',
    answer: ''
  }

  submit = () => {
    const { question, answer } = this.state;

    if (question.trim() === '' || answer.trim() === '') {
      return alert("Please fill in the empty field(s)");
    }

    const { addCard, navigation, deckId } = this.props;
    addCard(this.state);
    navigation.navigate("DeckDetail", { id: deckId });
  }

  render() {
    return (
      <KeyboardAvoidingView
        style={formStyles.container}
        behavior="padding"
        enabled>
        <TextInput
          style={formStyles.input}
          placeholder="Type your question here..."
          onChangeText={(question) => this.setState({ question })}
        />
        <TextInput
          style={formStyles.input}
          placeholder="Type your answer here..."
          onChangeText={(answer) => this.setState({ answer })}
        />
        <TouchableOpacity style={formStyles.submitButton} onPress={this.submit}>
          <Text style={{ color: white }}>Add Card</Text>
        </TouchableOpacity>
      </KeyboardAvoidingView>
    );
  }
}

const mapDispatchToProps = (dispatch, { navigation }) => {
  const { deckId } = navigation.state.params;

  return {
    addCard: (card) => dispatch(addCardActionCreator(card, deckId))
  }
}

const mergeProps = (stateProps, dispatchProps, { navigation }) => {
  const { deckId } = navigation.state.params;

  return {
    ...stateProps,
    ...dispatchProps,
    deckId,
    navigation
  };
}

export default connect(null, mapDispatchToProps, mergeProps)(AddCard);