import React from "react";
import { StyleSheet, View, TextInput, Text, TouchableOpacity } from "react-native";
import { connect } from 'react-redux';

import { addDeckActionCreator } from "../actions/decks";

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
      <View style={styles.container}>
        <TextInput
          style={styles.input}
          placeholder="Type your title here..."
          onChangeText={(title) => this.setState({ title })}
          value={title}
        />
        <TouchableOpacity
          style={styles.button}
          onPress={this.submit}>
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

const mapDispatchToProps = (dispatch) => {
  return {
    addDeck: (deck) => dispatch(addDeckActionCreator(deck))
  }
}

export default connect(null, mapDispatchToProps)(NewDeck);