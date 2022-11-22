import { Text, Image, StyleSheet, View } from "react-native";
import React from "react";
import { TouchableOpacity } from "react-native-gesture-handler";

const Card = ({ data }) => {
  return (
    <TouchableOpacity style={styles.cardContainer}>
      <Image
        style={{ width: "100%", height: 200 }}
        source={{ uri: data.movie_banner }}
      />
      <View style={styles.cardContent}>
        <Text>{data.title}</Text>
        <Text>{data.director}</Text>
        <Text>{data.original_title_romanised}</Text>
        <Text>{data.release_date}</Text>
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  cardContainer: {
    borderRadius: 12,
    shadow: {
      shadowColor: "#4D4D4D",
      shadowOffset: {
        width: 0,
        height: 0,
      },
      shadowOpacity: 0.15,
      shadowRadius: 24,
      elevation: 5,
    },
    marginLeft: "auto",
    marginRight: "auto",
    backgroundColor: "#fff",
    width: "80%",
    overflow: "hidden",
    marginBottom: 12,
  },
  cardContent: {
    padding: 8,
  },
});

export default Card;
