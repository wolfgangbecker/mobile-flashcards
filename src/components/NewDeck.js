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

    addDeck(this.state);
    this.setState({ title: '' });
    navigation.navigate("Decks");
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
          <Text style={{ color: '#fff' }}>Submit</Text>
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