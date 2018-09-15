import { StyleSheet } from "react-native";
import { black, darkGrey } from './colors';

export default StyleSheet.create({
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
  submitButton: {
    width: 200,
    marginTop: 30,
    paddingVertical: 20,
    borderWidth: 1,
    borderRadius: 5,
    borderColor: darkGrey,
    alignItems: "center",
    marginBottom: 10,
    backgroundColor: black
  }
});