import { Alert, FlatList, ScrollView, StyleSheet, Text, View } from "react-native";
import Title from "../components/ui/Title";
import NumberContainer from "../components/game/NumberContainer";
import { useEffect, useState } from "react";
import PrimaryButton from "../components/ui/PrimaryButton";
import Card from "../components/ui/Card";
import InstructionText from "../components/ui/InstructionText";
import { Ionicons } from "@expo/vector-icons";
import GuessLogItem from "../components/game/GuessLogItem";

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

export default function GameScreen({ userNumber, onGameOver, getAttempts = () => {} }) {
  const initialNum = generateRandomNumBetween(1, 100, userNumber);
  const [currentGuessNum, setCurrentGuessNum] = useState(initialNum);
  const [logs, setLogs] = useState([initialNum]);
  const [attempts, setAttempts] = useState(0);

  useEffect(() => {
    if (currentGuessNum === userNumber) {
      Alert.alert("Game Over!", "end", [{ text: "OK", style: "default" }]);
      onGameOver();
      getAttempts.bind(this, attempts)();
    }
  }, [currentGuessNum, onGameOver, userNumber, getAttempts]);

  useEffect(() => {
    minBoundary = 1;
    maxBoundary = 100;
    setAttempts(0);
  }, []);

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
    setAttempts((prev) => ++prev);
    setLogs((guessedLogs) => [newRandomNum, ...guessedLogs]);
  }

  const guessRounds = logs.length;

  return (
    <View style={styles.container}>
      <Title style={styles.title}>Opponent's Guess</Title>
      <NumberContainer>{currentGuessNum}</NumberContainer>
      <Card style={styles.card}>
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
      <View style={styles.listContainer}>
        <FlatList data={logs} renderItem={({ item, index }) => <GuessLogItem roundNumber={guessRounds - index} guess={item}/>} keyExtractor={(item) => item} />
      </View>
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
    marginBottom: 12,
  },
  card: {
    marginBottom: 8
  },
  listContainer: {
    flex: 1,
    padding: 16
  }
});
