import { StyleSheet, Text, View, Image } from "react-native";

const Home = () => {
  const logo = require("../assets/img/logo_light.png");

  return (
    <View style={styles.container}>
      <Image source={logo} style={styles.img} />

      <Text style={styles.title}>The Number 1</Text>

      <Text style={{ marginTop: 10, marginBottom: 30 }}>Reading List App</Text>
    </View>
  );
};

export default Home;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  title: {
    fontWeight: "900",
    fontSize: 18,
  },
  img: {
    marginVertical: 20,
  },
});
