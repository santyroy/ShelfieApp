import { Stack } from "expo-router";
import { StatusBar } from "expo-status-bar";
import { Text, View } from "react-native";

const RootLayout = () => {
  return (
    <>
      <StatusBar style="auto" />
      <View style={{ flex: 1 }}>
        <Stack />
        <Text>Footer</Text>
      </View>
    </>
  );
};

export default RootLayout;
