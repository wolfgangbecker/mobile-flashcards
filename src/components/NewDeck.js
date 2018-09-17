import React from "react";
import { KeyboardAvoidingView, TextInput, Text, TouchableOpacity } from "react-native";
import { connect } from 'react-redux';

import { addDeckActionCreator } from "../actions/decks";
import formStyles from "../styles/forms";
import { white } from "../styles/colors";

export class NewDeck extends React.Component {
  state = {
    title: '',
  }

  submit = () => {
    const { title } = this.state;

    if (title.trim() === '') {
      return alert("Please provide a title");
    }

    const { addDeck, navigation } = this.props;
    const { deck: { id } } = addDeck(this.state);
    this.setState({ title: '' });
    navigation.navigate("DeckDetail", { id, title });
  }

  render() {
    const { title } = this.state;

    return (
      <KeyboardAvoidingView
        style={formStyles.container}
        behavior="padding"
        enabled>
        <TextInput
          style={formStyles.input}
          placeholder="Type your title here..."
          onChangeText={(title) => this.setState({ title })}
          value={title}
        />
        <TouchableOpacity
          style={formStyles.submitButton}
          onPress={this.submit}>
          <Text style={{ color: white }}>Create Deck</Text>
        </TouchableOpacity>
      </KeyboardAvoidingView>
    );
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    addDeck: (deck) => dispatch(addDeckActionCreator(deck))
  }
}

export default connect(null, mapDispatchToProps)(NewDeck);