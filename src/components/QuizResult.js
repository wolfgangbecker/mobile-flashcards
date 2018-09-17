import React from "react";
import { StyleSheet, Text, View, TouchableOpacity } from "react-native";
import { setLocalNotification, clearLocalNotification } from "../utils/notifications";
import { black, white, grey, darkGrey } from "../styles/colors";

export class QuizResult extends React.Component {
  componentDidMount() {
    clearLocalNotification().then(setLocalNotification);
  }

  render() {
    const { score, numberOfCards, restart, backToDeck } = this.props;

    return (
      <View style={styles.container}>
        <View style={styles.scoreContainer}>
          <Text style={styles.score}>{Math.round(score / numberOfCards * 100)}%</Text>
        </View>
        <View style={styles.section}>
          <TouchableOpacity
            style={styles.button}
            onPress={restart}>
            <Text style={{ color: black }}>Restart Quiz</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={[styles.button, { backgroundColor: "#000" }]}
            onPress={backToDeck}>
            <Text style={{ color: white }}>Back to Deck</Text>
          </TouchableOpacity>
        </View>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center"
  },
  section: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center"
  },
  scoreContainer: {
    marginTop: 50,
    alignItems: "center",
    justifyContent: "center",
    borderRadius: 100,
    height: 150,
    width: 150,
    borderWidth: 5,
    borderColor: grey
  },
  score: {
    fontSize: 50
  },
  button: {
    width: 200,
    paddingVertical: 20,
    borderWidth: 1,
    borderRadius: 5,
    borderColor: darkGrey,
    alignItems: "center",
    marginBottom: 10
  }
});