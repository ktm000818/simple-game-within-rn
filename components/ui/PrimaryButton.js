import { Pressable, StyleSheet, Text, View } from "react-native";
import Colors from "../../constants/colors";

export default function PrimaryButton(props) {
  return (
    <View style={styles.buttonOuterContainer}>
      <Pressable 
        // style={({ pressed }) => pressed && styles.buttonPressed} 
        style={({pressed}) => pressed ? [styles.buttonInnerContainer, styles.buttonPressed] : styles.buttonInnerContainer}
        android_ripple={{ color: Colors.primary600 }} 
        onPress={props.onPressButton}
      >
        <Text style={styles.buttonText}>{props.children}</Text>
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
    backgroundColor: Colors.primary500,
    padding: 8,
    paddingHorizontal: 24,
  },
  buttonPressed: {
    opacity: 0.5,
  },
  buttonText: {
    color: Colors.secondary500,
    textAlign: "center",
  },
});
