import { Dimensions, Image, StyleSheet, Text, View, useWindowDimensions } from "react-native";
import Title from "../components/ui/Title";
import Colors from "../constants/colors";
import PrimaryButton from "../components/ui/PrimaryButton";

export default function GameOverScreen({roundsNumber, userNumber, onStartNewGame}) {
  const {width, height} = useWindowDimensions();

  const imageDimensions = width > 500 ? 100 : 300;
  const borderDimensions = width > 500 ? 50 : 150;
  const margin = width > 500 ? 18 : 20;

  return (
    <View style={styles.rootContainer}>
      <Title>GAME OVER!</Title>
      <View style={[styles.imageContainer, {width: imageDimensions, height: imageDimensions, borderRadius: borderDimensions, margin}]}>
        <Image style={styles.image} source={require("../assets/images/success.png")} />
      </View>
      <Text style={styles.summaryText}>
        Your phone needed <Text style={styles.highlight}>{roundsNumber}</Text> rounds to guess the number <Text style={styles.highlight}>{userNumber}</Text>.
      </Text>
      <PrimaryButton onPressButton={onStartNewGame}>Start New Game</PrimaryButton>
    </View>
  );
}

const deviceWidth = Dimensions.get('window').width;

const styles = StyleSheet.create({
  rootContainer: {
    alignItems: "center",
    padding: 24,
    justifyContent: "center",
    flex: 1,
  },
  imageContainer: {
    alignItems: "center",
    width: deviceWidth < 380 ? 150 : 300,
    height: deviceWidth < 380 ? 150 : 300,
    borderRadius: deviceWidth < 380 ? 75 : 150,
    overflow: "hidden",
    borderWidth: 3,
    borderColor: Colors.primary700,
    margin: 36,
  },
  image: {
    width: "100%",
    height: "100%",
  },
  summaryText: {
    fontFamily: "open-sans",
    fontSize: 24,
    textAlign: "center",
    marginBottom: 24,
  },
  highlight: {
    fontFamily: "open-sans-bold",
    color: Colors.primary500,
  },
});
