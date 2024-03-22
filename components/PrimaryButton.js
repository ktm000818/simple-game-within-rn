import { Pressable, StyleSheet, Text, View } from "react-native";

export default function PrimaryButton(props) {
  return (
    <View style={styles.buttonOuterContainer}>
      <Pressable 
        // style={({ pressed }) => pressed && styles.buttonPressed} 
        style={({pressed}) => pressed ? [styles.buttonInnerContainer, styles.buttonPressed] : styles.buttonInnerContainer}
        android_ripple={{ color: "#640223" }} 
        onPress={props.onPressButton}
      >
        <Text style={styles.buttonText}>{props.title}</Text>
      </Pressable>
    </View>
  );
}

const styles = StyleSheet.create({
  buttonOuterContainer: {
    borderRadius: 28,
    margin: 4,
    overflow: "hidden",
  },
  buttonInnerContainer: {
    width: 100,
    backgroundColor: "#7f0a33",
    padding: 8,
    paddingHorizontal: 24,
  },
  buttonPressed: {
    opacity: 0.5,
  },
  buttonText: {
    color: "#ffffff",
    textAlign: "center",
  },
});
