import { LinearGradient } from "expo-linear-gradient";
import { StatusBar } from "expo-status-bar";
import { useCallback, useEffect, useState } from "react";
import { ImageBackground, SafeAreaView, StyleSheet } from "react-native";
import Colors from "./constants/colors";
import GameOverScreen from "./screens/GameOverScreen";
import GameScreen from "./screens/GameScreen";
import HomeScreen from "./screens/HomeScreen";
import * as Font from "expo-font";
import * as SplashScreen from "expo-splash-screen";

SplashScreen.preventAutoHideAsync();

export default function App() {
  const [isAppReady, setIsAppReady] = useState(false);
  const [userNumber, setUserNumber] = useState();
  const [gameIsOver, setGameIsOver] = useState(false);
  const [attemptRounds, setAttemptRounds] = useState(0);

  useEffect(() => {
    async function prepare() {
      try {
        await Font.loadAsync({
          "open-sans": require("./assets/fonts/OpenSans-Regular.ttf"),
          "open-sans-bold": require("./assets/fonts/OpenSans-Bold.ttf"),
        });
      } catch (error) {
        console.warn(error)
      } finally {
        setIsAppReady(true);
      }
    }

    prepare();
  }, [])

  const onLayoutRootView = useCallback(async () => {
    if(isAppReady){
      await SplashScreen.hideAsync();
    }
  }, [isAppReady])

  function pickedNumberHandler(pickedNumber) {
    setUserNumber(pickedNumber);
  }

  function startNewGameHandler() {
    setUserNumber(null);
    setGameIsOver(false);
    setAttemptRounds(0);
  }

  function getAttemptsHandler(attempts){
    setAttemptRounds(attempts);
  }

  let screen = <HomeScreen getPickedNumber={pickedNumberHandler} />;
  if (userNumber) {
    screen = <GameScreen userNumber={userNumber} onGameOver={gameOverHandler} getAttempts={getAttemptsHandler}/>;
  }
  if (gameIsOver) {
    screen = <GameOverScreen userNumber={userNumber} roundsNumber={attemptRounds} onStartNewGame={startNewGameHandler} />;
  }

  function gameOverHandler() {
    setGameIsOver(true);
  }

  if(!isAppReady){
    return null;
  }

  return (
    <>
      <StatusBar style="light" />
      <LinearGradient colors={[Colors.primary600, Colors.secondary500]} style={styles.rootContainer} onLayout={onLayoutRootView}>
        <ImageBackground imageStyle={styles.backgroundImage} source={require("./assets/images/background.png")} resizeMode="cover" style={styles.rootContainer}>
          <SafeAreaView style={styles.rootContainer}>{screen}</SafeAreaView>
        </ImageBackground>
      </LinearGradient>
    </>
  );
}

const styles = StyleSheet.create({
  rootContainer: {
    flex: 1,
  },
  backgroundImage: {
    opacity: 0.15,
  },
});
