import React from "react";
import { View, TextInput, Text, TouchableOpacity } from "react-native";
import { connect } from 'react-redux';

import { addCardActionCreator } from "../actions/cards";
import formStyles from "../styles/forms";

export class AddCard extends React.Component {
  state = {
    question: '',
    answer: ''
  }

  submit = () => {
    const { addCard, navigation, deckId } = this.props;

    addCard(this.state);
    navigation.navigate("DeckDetail", { id: deckId });
  }

  render() {
    return (
      <View style={formStyles.container}>
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
          <Text style={{ color: '#fff' }}>Add Card</Text>
        </TouchableOpacity>
      </View>
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