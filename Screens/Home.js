import { SafeAreaView, Text, Image, StyleSheet } from "react-native";
import React from "react";

const Home = () => {
  return (
    <SafeAreaView style={styles.screenContainer}>
      <Image
        style={{ width: "100%", height: 300, marginBottom: 8 }}
        source={require("../assets/ghibli-image.jpeg")}
      />
      <Text style={styles.title}>Welcome to The Ghibli Library</Text>
      <Text style={styles.title}>
        The Ghibli Library offers you a list of popular studio Ghibli movies!
      </Text>
    </SafeAreaView>
  );
};
const styles = StyleSheet.create({
  screenContainer: {
    backgroundColor: "#fff",
    height: "100%",
    alignItems: "center",
  },
  title: {
    fontSize: 25,
    lineHeight: 30,
    color: "#111",
    textAlign: "center",
    marginVertical: 8,
  },
});
export default Home;
