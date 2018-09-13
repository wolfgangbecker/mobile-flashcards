import React from "react";
import { StyleSheet, Text, View, TouchableOpacity } from "react-native";
import { connect } from 'react-redux';

export class Deck extends React.Component {
  render() {
    const { deck } = this.props;

    return (
      <TouchableOpacity style={styles.container} onPress={() => this.props.navigation.navigate("DeckDetail", { id: deck.id, title: deck.title })}>
        <Text style={styles.title}>{deck.title}</Text>
        <Text style={styles.count}>{deck.cardIds.length} cards</Text>
      </TouchableOpacity>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    height: 200,
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
  title: {
    fontSize: 30
  },
  count: {
    fontSize: 20
  }
});

function mapStateToProps({ decks }, { id }) {
  return {
    deck: decks[id]
  }
}

export default connect(mapStateToProps)(Deck);