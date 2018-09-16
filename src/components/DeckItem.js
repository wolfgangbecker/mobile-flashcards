import React from "react";
import { StyleSheet, Text, TouchableWithoutFeedback, Animated } from "react-native";
import { connect } from 'react-redux';

export class DeckItem extends React.Component {
  state = {
    opacity: new Animated.Value(1),
    scale: new Animated.Value(1)
  }

  select = () => {
    const { deck } = this.props;
    const { opacity, scale } = this.state;

    Animated.parallel([
      Animated.timing(opacity, { toValue: 0, duration: 500 }),
      Animated.timing(scale, { toValue: 2, duration: 500 })
    ]).start(() => {
      this.props.navigation.navigate("DeckDetail", { id: deck.id, title: deck.title });
      setTimeout(() => {
        // HACK: Reset the values to make the deck visible again
        this.state.opacity.setValue(1);
        this.state.scale.setValue(1);
      }, 1000);
    });
  }

  render() {
    const { deck } = this.props;
    const { opacity, scale } = this.state;

    return (
      <TouchableWithoutFeedback onPress={this.select}>
        <Animated.View style={[styles.container, { opacity, transform: [{ scale }] }]}>
          <Text style={styles.title}>{deck.title}</Text>
          <Text style={styles.count}>{deck.cardIds.length} cards</Text>
        </Animated.View>
      </TouchableWithoutFeedback>
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
    padding: 20,
    backgroundColor: "#eee",
    borderColor: '#ddd',
    borderWidth: 1,
    borderRadius: 5,
    alignItems: "center",
    justifyContent: "center"
  },
  title: {
    fontSize: 30,
    textAlign: "center"
  },
  count: {
    fontSize: 20,
    color: '#888',
    textAlign: "center"
  }
});

function mapStateToProps({ decks }, { id }) {
  return {
    deck: decks[id]
  }
}

export default connect(mapStateToProps)(DeckItem);