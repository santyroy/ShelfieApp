import { Image, useColorScheme } from "react-native";
import { Colors } from "../constants/Colors";

const ThemedLogo = ({ ...props }) => {
  const colorScheme = useColorScheme();

  const darkLogo = require("../assets/img/logo_dark.png");
  const lightLogo = require("../assets/img/logo_light.png");
  const logo = colorScheme == "dark" ? darkLogo : lightLogo;

  return <Image source={logo} {...props} />;
};

export default ThemedLogo;
