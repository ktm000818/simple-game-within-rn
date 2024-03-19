import { NavigationContainer } from '@react-navigation/native';
import { StatusBar } from "expo-status-bar";
import { StyleSheet } from "react-native";
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import HomeScreen from "./stacks/HomeScreen";

export default function App() {
  const Stack = createNativeStackNavigator();
  return (
    <>
      <StatusBar style="light" />
      <NavigationContainer>
        <Stack.Navigator screenOptions={{headerShown: false}}>
          <Stack.Screen
            name="Home"
            component={HomeScreen}
          />
        </Stack.Navigator>
      </NavigationContainer>
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
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
    padding: 8
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
    marginBottom: 10
  },
  textInput: {
    width: 50,
    fontSize: 20,
    fontWeight: 'bold',
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
