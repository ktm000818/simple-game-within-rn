import { Pressable, StyleSheet, Text, View } from "react-native";

export default function CustomButton(props) {
  return (
    <View style={styles.buttonOuterContainer}>
      <Pressable style={styles.button} onPress={({ pressed }) => pressed && styles.buttonPressed}>
        <Text style={styles.buttonText}>{props.title}</Text>
      </Pressable> 
    </View>
  );
}

const styles = StyleSheet.create({
  buttonOuterContainer: {
    borderRadius: 50,
    overflow: "hidden",
    backgroundColor: "#7f0a33",
    justifyContent: "center",
    alignItems: "center",
    margin: 8,
    padding: 8
  },
  buttonPressed: {
    backgroundColor: "#48051d",
  },
  button: {
    width: 150,
    paddingHorizontal: 24,
    borderRadius: 50,
    backgroundColor: "#7f0a33",
  },
  buttonText: {
    color: "#ffffff",
    textAlign: 'center'
  },
});
