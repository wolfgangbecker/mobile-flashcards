import React from "react";
import { StyleSheet, Text, View, TouchableOpacity } from "react-native";

export const QuizResult = ({ score, numberOfCards, restart, backToDeck }) => (
  <View style={styles.container}>
    <View style={styles.scoreContainer}>
      <Text style={styles.score}>{Math.round(score / numberOfCards * 100)}%</Text>
    </View>
    <View style={styles.section}>
      <TouchableOpacity
        style={styles.button}
        onPress={restart}>
        <Text style={{ color: '#000' }}>Restart Quiz</Text>
      </TouchableOpacity>
      <TouchableOpacity
        style={[styles.button, { backgroundColor: "#000" }]}
        onPress={backToDeck}>
        <Text style={{ color: '#fff' }}>Back to Deck</Text>
      </TouchableOpacity>
    </View>
  </View>
);

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
    borderColor: '#888'
  },
  score: {
    fontSize: 50
  },
  button: {
    width: 200,
    paddingVertical: 20,
    borderWidth: 1,
    borderRadius: 5,
    borderColor: '#222',
    alignItems: "center",
    marginBottom: 10
  }
});