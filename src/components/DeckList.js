import React from "react";
import { Text, View } from "react-native";
import { connect } from 'react-redux';

export class DeckList extends React.Component {
  render() {
    const { decks } = this.props;

    return (
      <View>
        {decks.map((deck, index) => {
          <Text id={index}>{deck.title}</Text>
        })}
      </View>
    );
  }
}

function mapStateToProps({ decks }) {
  return {
    decks: Object.keys(decks).map(key => decks[key])
  }
}

export default connect(mapStateToProps)(DeckList);