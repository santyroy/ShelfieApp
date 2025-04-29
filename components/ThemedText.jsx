import { Text, useColorScheme } from "react-native";
import { Colors } from "../constants/Colors";

const ThemedText = ({ style, title = false, children, ...props }) => {
  const colorScheme = useColorScheme();
  const theme = Colors[colorScheme ?? "light"];
  const textColor = title ? theme.title : theme.text;

  return (
    <Text style={[{ color: textColor }, style]} {...props}>
      {children}
    </Text>
  );
};

export default ThemedText;
