import React from "react";
import { View, TextInput, Text, TouchableOpacity } from "react-native";
import { connect } from 'react-redux';

import { addDeckActionCreator } from "../actions/decks";
import formStyles from "../styles/forms";

export class NewDeck extends React.Component {
  state = {
    title: '',
  }

  submit = () => {
    const { addDeck, navigation } = this.props;

    const { deck: { id, title } } = addDeck(this.state);
    this.setState({ title: '' });
    navigation.navigate("DeckDetail", { id, title });
  }

  render() {
    const { title } = this.state;

    return (
      <View style={formStyles.container}>
        <TextInput
          style={formStyles.input}
          placeholder="Type your title here..."
          onChangeText={(title) => this.setState({ title })}
          value={title}
        />
        <TouchableOpacity
          style={formStyles.submitButton}
          onPress={this.submit}>
          <Text style={{ color: '#fff' }}>Create Deck</Text>
        </TouchableOpacity>
      </View>
    );
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    addDeck: (deck) => dispatch(addDeckActionCreator(deck))
  }
}

export default connect(null, mapDispatchToProps)(NewDeck);