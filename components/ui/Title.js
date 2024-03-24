import { StyleSheet, Text } from "react-native";

export default function Title({children, style}) {
  return <Text style={[styles.title, style]}>{children}</Text>;
}

const styles = StyleSheet.create({
  title: {
    maxWidth: '80%',
    width: 300,
    fontFamily: 'open-sans-bold',
    fontSize: 18,
    color: 'white',
    textAlign: "center",
    borderWidth: 2,
    borderColor: 'white',
    padding: 12,
  },
});