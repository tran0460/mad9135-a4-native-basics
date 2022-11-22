import { Text, Image, StyleSheet, View } from "react-native";
import React from "react";
import { TouchableOpacity } from "react-native-gesture-handler";

const Card = ({ data, navigation }) => {
  return (
    <TouchableOpacity
      style={styles.cardContainer}
      onPress={() => {
        navigation.navigate("Details");
      }}>
      <Image
        style={{ width: "100%", height: 200 }}
        source={{ uri: data.movie_banner }}
      />
      <View style={styles.cardContent}>
        <Text style={[styles.cardTitle, styles.paddingBottom]}>
          {data.title}
        </Text>
        <Text style={[styles.callout, styles.paddingBottom]}>
          {data.original_title_romanised}
        </Text>
        <Text style={[styles.paddingBottom]}>Director: {data.director}</Text>
        <Text>Year: {data.release_date}</Text>
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
    marginTop: 16,
    flex: 1,
    gap: 12,
  },
  cardContent: {
    padding: 8,
  },
  cardTitle: {
    fontSize: 24,
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
});

export default Card;
