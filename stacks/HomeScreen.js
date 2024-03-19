import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, TextInput, View } from "react-native";
import CustomButton from "../components/CustomButton";

export default function HomeScreen() {
  // TODO define state of quizNum
  return (
    <>
      <View style={styles.container}>
        <View style={styles.titleContainer}>
          <Text style={styles.title}>Guess My Number!</Text>
        </View>
        <View style={styles.inputContainer}>
          <Text style={styles.description}>Enter a Number</Text>
          <TextInput keyboardType="number-pad" style={styles.textInput} />
          <View style={styles.buttonContainer}>
            <CustomButton title="Reset" />
            <CustomButton title="Confirm" />
          </View>
        </View>
      </View>
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: '#000000'
  },
  titleContainer: {
    padding: 8,
    borderWidth: 1,
    borderColor: "#ffffff",
    marginBottom: 24,
  },
  title: {
    fontSize: 24,
    color: "#ffffff",
    padding: 8,
  },
  inputContainer: {
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#550823",
    padding: 16,
  },
  description: {
    fontSize: 18,
    color: "#ffc400",
    marginBottom: 10,
  },
  textInput: {
    width: 50,
    fontSize: 20,
    fontWeight: "bold",
    textAlign: "center",
    color: "#ffc400",
    borderBottomColor: "#ffc400",
    borderTopWidth: 0,
    borderLeftWidth: 0,
    borderRightWidth: 0,
    borderWidth: 1,
  },
  buttonContainer: {
    flexDirection: "row",
  },
});
