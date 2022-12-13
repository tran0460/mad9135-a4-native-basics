import { SafeAreaView, View, Text, Image, StyleSheet } from "react-native";
import React from "react";
import { useAppContext } from "../AppContext";
const Details = () => {
  const { currentItem } = useAppContext();
  return (
    <SafeAreaView style={styles.screenContainer}>
      <Image
        style={{ width: "100%", height: 300, marginBottom: 8 }}
        source={{ uri: currentItem.picture.large }}
      />
      <View style={styles.content}>
        <Text style={[styles.title, styles.paddingBottom]}>
          {`${currentItem.name.title} ${currentItem.name.first} ${currentItem.name.last}`}
        </Text>
        <Text style={[styles.callout, styles.paddingBottom]}>
          {currentItem.phone}
        </Text>
        <Text style={[styles.paddingBottom]}>Email: {currentItem.email}</Text>
        <Text
          style={
            styles.paddingBottom
          }>{`${currentItem.location.street.number} ${currentItem.location.street.name}, ${currentItem.location.state}, ${currentItem.location.country}`}</Text>
      </View>
    </SafeAreaView>
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
