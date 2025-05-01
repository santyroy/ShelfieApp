import { Pressable, StyleSheet } from "react-native";
import { Colors } from "../constants/Colors";

const ThemedButton = ({ style, children, ...props }) => {
  return (
    <Pressable
      style={({ pressed }) => [styles.btn, pressed && styles.pressed, style]}
      {...props}
    >
      {children}
    </Pressable>
  );
};

export default ThemedButton;

const styles = StyleSheet.create({
  btn: {
    backgroundColor: Colors.primary,
    padding: 18,
    borderRadius: 5,
    marginVertical: 10,
  },
  pressed: {
    opacity: 0.8,
  },
});
