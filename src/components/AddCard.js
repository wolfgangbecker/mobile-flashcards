import React from "react";
import { StyleSheet, View, TextInput, Text, TouchableOpacity } from "react-native";
import { connect } from 'react-redux';

import { addCardActionCreator } from "../actions/cards";

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
      <View style={styles.container}>
        <TextInput
          style={styles.input}
          placeholder="Type your question here..."
          onChangeText={(question) => this.setState({ question })}
        />
        <TextInput
          style={styles.input}
          placeholder="Type your answer here..."
          onChangeText={(answer) => this.setState({ answer })}
        />
        <TouchableOpacity style={styles.button} onPress={this.submit}>
          <Text style={{ color: '#fff' }}>Submit</Text>
        </TouchableOpacity>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 25,
    alignItems: "center"
  },
  input: {
    height: 50,
    alignSelf: "stretch",
    marginBottom: 30
  },
  button: {
    width: 200,
    marginTop: 30,
    paddingVertical: 20,
    borderWidth: 1,
    borderRadius: 5,
    borderColor: '#222',
    alignItems: "center",
    marginBottom: 10,
    backgroundColor: "#000"
  }
});

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