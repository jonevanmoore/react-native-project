import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
  body: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'flex-start', // Align items to the start of the container
    paddingTop: 50, // Add some padding to the top
    backgroundColor: '#f8f8f8', // Added background color for better visibility
  },
  goalContainer: {
    flex: 1,
    width: "90%",
  },
  goalItem: {
    marginBottom: 10,
    backgroundColor: "purple",
    padding: 10,
    borderRadius: 5,
  },
  text: {
    color: "#FFFFFF",
  },
});