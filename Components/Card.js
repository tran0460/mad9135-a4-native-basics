import { Text, Image, StyleSheet, View } from "react-native";
import React from "react";
import { TouchableOpacity } from "react-native-gesture-handler";
import { useAppContext } from "../AppContext";

const Card = ({ data, navigation }) => {
  const { setCurrentItem } = useAppContext();
  return (
    <TouchableOpacity
      style={styles.cardContainer}
      onPress={() => {
        setCurrentItem(data);
        navigation.navigate("Details");
      }}>
      <Image
        resizeMode="contain"
        style={{
          width: 100,
          height: 100,
          marginLeft: "auto",
          marginRight: "auto",
          borderRadius: 160,
        }}
        source={{ uri: data.picture.large }}
      />
      <View style={styles.cardContent}>
        <Text
          style={[styles.cardTitle, styles.paddingBottom, styles.textCenter]}>
          {`${data.name.first} ${data.name.last}`}
        </Text>
        <Text style={[styles.paddingBottom, styles.textCenter]}>
          {data.email}
        </Text>
        <Text style={styles.textCenter}>{data.phone}</Text>
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
    width: "60%",
    overflow: "hidden",
    marginTop: 16,
    flex: 1,
    alignItems: "center",
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
  textCenter: {
    textAlign: "center",
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
