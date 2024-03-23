import { Alert, StyleSheet, Text, View } from "react-native";
import Title from "../components/ui/Title";
import NumberContainer from "../components/game/NumberContainer";
import { useEffect, useState } from "react";
import PrimaryButton from "../components/ui/PrimaryButton";
import Card from "../components/ui/Card";
import InstructionText from "../components/ui/InstructionText";
import { Ionicons } from '@expo/vector-icons';

function generateRandomNumBetween(min, max, exclude) {
  const randomNum = Math.floor(Math.random() * (max - min)) + min;
  if (randomNum === exclude) {
    return generateRandomNumBetween(min, max, exclude);
  } else {
    return randomNum;
  }
}

let minBoundary = 1;
let maxBoundary = 100;

export default function GameScreen({ userNumber, onGameOver }) {
  const [currentGuessNum, setCurrentGuessNum] = useState(() => generateRandomNumBetween(minBoundary, maxBoundary, userNumber));

  useEffect(() => {
    if (currentGuessNum === userNumber) {
      Alert.alert("Game Over!", "end", [{ text: "OK", style: "default" }]);
      onGameOver();
    }
  }, [currentGuessNum, onGameOver, userNumber]);

  function nextGuessHander(direction) {
    // 'lower' ,'greater'
    if ((direction === "lower" && currentGuessNum < userNumber) || (direction === "greater" && currentGuessNum > userNumber)) {
      Alert.alert("Don't lie!", "You know that this is wrong...", [{ text: "Sorry.", style: "cancel" }]);
      return;
    }

    if (direction === "lower") {
      maxBoundary = currentGuessNum;
    } else {
      minBoundary = currentGuessNum + 1;
    }

    const newRandomNum = generateRandomNumBetween(minBoundary, maxBoundary, currentGuessNum);
    setCurrentGuessNum(newRandomNum);
  }

  return (
    <View style={styles.container}>
      <Title style={styles.title}>Opponent's Guess</Title>
      <NumberContainer>{currentGuessNum}</NumberContainer>
      <Card>
        <InstructionText style={styles.instructionText}>Higher or Lower?</InstructionText>
        <View style={styles.buttonContainer}>
          <PrimaryButton onPressButton={nextGuessHander.bind(this, "greater")}>
            <Ionicons name="add" size={24} color={"#ffffff"} />
          </PrimaryButton>
          <PrimaryButton onPressButton={nextGuessHander.bind(this, "lower")}>
            <Ionicons name="remove" size={24} color={"#ffffff"} />
          </PrimaryButton>
        </View>
      </Card>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 24,
  },
  title: {
    marginTop: 20,
  },
  buttonContainer: {
    flexDirection: "row",
    justifyContent: "center",
  },
  instructionText: {
    marginBottom: 12
  }
});
