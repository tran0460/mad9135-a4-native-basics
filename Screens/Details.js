import { View, Text, Image, StyleSheet } from "react-native";
import React from "react";
import { useAppContext } from "../AppContext";
const Details = () => {
  const { currentItem } = useAppContext();
  console.log(currentItem);
  return (
    <View style={styles.screenContainer}>
      <Image
        style={{ width: "100%", height: 300, marginBottom: 8 }}
        source={{ uri: currentItem.movie_banner }}
      />
      <View style={styles.content}>
        <Text style={[styles.title, styles.paddingBottom]}>
          {currentItem.title}
          {`  (${currentItem.original_title})`}
        </Text>
        <Text style={[styles.callout, styles.paddingBottom]}>
          {currentItem.original_title_romanised}
        </Text>
        <Text style={styles.paddingBottom}>
          Year: {currentItem.release_date}
        </Text>
        <Text style={styles.paddingBottom}>{currentItem.description}</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  screenContainer: {
    backgroundColor: "#fff",
    height: "100%",
  },
  title: {
    fontSize: 22,
    lineHeight: 30,
    color: "#111",
  },
  callout: {
    fontSize: 15,
    opacity: 1,
    color: "#9D9D9D",
    lineHeight: 20,
  },
  paddingBottom: {
    paddingBottom: 6,
  },
  content: {
    padding: 8,
  },
});
export default Details;
