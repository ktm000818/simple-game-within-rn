import { StyleSheet, Text, View } from "react-native";
import Card from "../ui/Card";
import Colors from "../../constants/colors";

export default function GuessLogItem({roundNumber, guess}) {
  return (
    <View style={styles.logsContainer}>
      <Text style={styles.log}>
        #{roundNumber} Opponent's guess : {guess}
      </Text>
    </View>
  );
}

const styles = StyleSheet.create({
  logsContainer: {
    borderColor: Colors.primary700,
    borderWidth: 1,
    borderRadius: 40,
    padding: 12,
    marginVertical: 8,
    overflow: 'hidden',
    margin: 8,
    backgroundColor: Colors.secondary500,
    flexDirection: 'row',
    justifyContent: 'center',
    elevation: 4,
    shadowColor: 'black',
    shadowOffset: {width: 0, height: 2},
    shadowOpacity: 0.5,
    shadowRadius: 3,
  },
  log: {
    fontFamily: 'open-sans-bold',
    color: "black",
    // fontWeight: 'bold'
  },
});