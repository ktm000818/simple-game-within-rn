import { StyleSheet, Text, View } from "react-native";
import Colors from "../../constants/colors";

export default function NumberContainer({ children }) {
  return (
    <View style={styles.container}>
      <Text style={styles.nubmerText}>{children}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    borderWidth: 4,
    borderColor: Colors.secondary500,
    padding: 24,
    borderRadius: 8,
    margin: 24,
    alignItems: "center",
  },
  nubmerText: {
    fontFamily: "open-sans-bold",
    color: Colors.secondary500,
    fontSize: 36,
    fontWeight: "bold",
  },
});
