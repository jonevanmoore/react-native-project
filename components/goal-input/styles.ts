import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
  inputContainer: {
    flexDirection: "row",
    width: "90%",
    justifyContent: "space-around",
    alignItems: "center", // Center items vertically
    marginBottom: 20, // Add margin to separate input from the list
  },
  textInput: {
    flex: 1,
    color: "#000000",
    backgroundColor: "#e0e0e0",
    borderWidth: 1,
    borderColor: "#cccccc",
    borderRadius: 5,
    paddingLeft: 10,
  },
});