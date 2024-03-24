import { StatusBar } from "expo-status-bar";
import { Alert, Dimensions, StyleSheet, Text, TextInput, View, useWindowDimensions, KeyboardAvoidingView, ScrollView } from "react-native";
import PrimaryButton from "../components/ui/PrimaryButton";
import { useState } from "react";
import Colors from "../constants/colors";
import Title from "../components/ui/Title";
import Card from "../components/ui/Card";
import InstructionText from "../components/ui/InstructionText";

export default function HomeScreen({ navigation, getPickedNumber = () => {} }) {
  const [quizNum, setQuizNum] = useState("");
  const { width, height } = useWindowDimensions();

  const handleChangeText = (text) => {
    setQuizNum(text);
  };

  const handleResetText = () => {
    setQuizNum("");
  };

  const handleStartGame = () => {
    let enteredQuizNum = parseInt(quizNum);
    if (isNaN(enteredQuizNum) || enteredQuizNum > 99 || enteredQuizNum <= -1) {
      Alert.alert("Invalid number!", "Number has to be a number betwwen 1 and 99.", [{ text: "OK", style: "destructive", onPress: handleResetText }]);
      return;
    }

    // game start
    getPickedNumber(enteredQuizNum);
  };

  const marginTop = height < 400 ? 30 : 100;

  return (
    <>
      <ScrollView style={styles.screen}>
        <KeyboardAvoidingView style={styles.screen} behavior="position">
          <View style={[styles.container, { marginTop }]}>
            <View style={styles.titleContainer}>
              <Title style={styles.title}>Guess My Number!</Title>
            </View>
            <Card>
              <InstructionText>Enter the Number!</InstructionText>
              <TextInput keyboardType="number-pad" maxLength={2} style={styles.textInput} value={quizNum} onChangeText={handleChangeText} />
              <View style={styles.buttonContainer}>
                <PrimaryButton onPressButton={handleResetText}>Reset</PrimaryButton>
                <PrimaryButton onPressButton={handleStartGame}>Confirm</PrimaryButton>
              </View>
            </Card>
          </View>
        </KeyboardAvoidingView>
      </ScrollView>
    </>
  );
}

const styles = StyleSheet.create({
  screen: {
    flex: 1,
  },
  container: {
    alignItems: "center",
    justifyContent: "center",
  },
  titleContainer: {
    padding: 8,
    marginBottom: 24,
  },
  title: {
    fontSize: 24,
    padding: 8,
  },
  textInput: {
    width: 50,
    fontSize: 20,
    fontWeight: "bold",
    textAlign: "center",
    color: Colors.secondary500,
    borderBottomColor: Colors.secondary500,
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
