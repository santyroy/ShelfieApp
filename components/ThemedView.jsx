import { useColorScheme, View } from "react-native";
import { Colors } from "../constants/Colors";
import { useSafeAreaInsets } from "react-native-safe-area-context";

const ThemedView = ({ style, safe = false, children, ...props }) => {
  const colorScheme = useColorScheme();
  const theme = Colors[colorScheme ?? "light"];
  const insets = useSafeAreaInsets();

  if (safe) {
    return (
      <View
        style={[
          {
            backgroundColor: theme.background,
            paddingTop: insets.top,
            paddingBottom: insets.bottom,
          },
          style,
        ]}
        {...props}
      >
        {children}
      </View>
    );
  }

  return (
    <View style={[{ backgroundColor: theme.background }, style]} {...props}>
      {children}
    </View>
  );
};

export default ThemedView;
