import { StatusBar } from "expo-status-bar";
import { Alert, StyleSheet, Text, TextInput, View } from "react-native";
import PrimaryButton from "../components/PrimaryButton";
import { useState } from "react";

export default function HomeScreen({ navigation, getPickedNumber = () => {} }) {
  const [quizNum, setQuizNum] = useState("");

  const handleChangeText = (text) => {
    setQuizNum(text);
  };

  const handleResetText = () => {
    setQuizNum("");
  };

  const handleStartGame = () => {
    let enteredQuizNum = parseInt(quizNum);
    if(isNaN(enteredQuizNum) ||enteredQuizNum > 99 || enteredQuizNum <= -1) {
      Alert.alert(
        "Invalid number!", 
        "Number has to be a number betwwen 1 and 99.", 
        [{ text: "OK", style: "destructive", onPress: handleResetText}]
      );
      return;
    }

    // game start
    getPickedNumber(enteredQuizNum);
  };

  return (
    <>
      <View style={styles.container}>
        <View style={styles.titleContainer}>
          <Text style={styles.title}>Guess My Number!</Text>
        </View>
        <View style={styles.inputContainer}>
          <Text style={styles.description}>Enter a Number</Text>
          <TextInput keyboardType="number-pad" maxLength={2} style={styles.textInput} value={quizNum} onChangeText={handleChangeText} />
          <View style={styles.buttonContainer}>
            <PrimaryButton title="Reset" onPressButton={handleResetText} />
            <PrimaryButton title="Confirm" onPressButton={handleStartGame} />
          </View>
        </View>
      </View>
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    alignItems: "center",
    justifyContent: "center",
  },
  titleContainer: {
    marginTop: 100,
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
    elevation: 10,
    shadowColor: "black",
    shadowOffset: { width: 0, height: 2 },
    shadowRadius: 6,
    shadowOpacity: 1,
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
    marginTop: 20,
    flexDirection: "row",
  },
});
