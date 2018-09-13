import React from "react";
import { StyleSheet, Text, View, FlatList } from "react-native";
import { connect } from 'react-redux';

import Deck from './Deck';

export class DeckList extends React.Component {
  render() {
    const { decks } = this.props;

    return (
      <View style={styles.container}>
        {decks.length === 0
          ? <View style={styles.noDecksContainer}><Text style={styles.noDecksText}>No decks available</Text></View>
          : <FlatList
            data={decks}
            keyExtractor={(deck) => deck.id}
            renderItem={({ item }) => <Deck id={item.id} navigation={this.props.navigation} />} />
        }
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1
  },
  noDecksContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: "center"
  },
  noDecksText: {
    fontSize: 20
  }
});

function mapStateToProps({ decks }) {
  return {
    decks: Object.keys(decks).map(key => decks[key])
  }
}

export default connect(mapStateToProps)(DeckList);