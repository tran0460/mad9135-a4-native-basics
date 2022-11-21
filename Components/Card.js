import { View, Text } from "react-native";
import React from "react";

const Card = ({ data }) => {
  return (
    <View>
      <Text>*****</Text>
      <Text>{data.title}</Text>
      <Text>{data.director}</Text>
      <Text>{data.original_title_romanised}</Text>
      <Text>{data.release_date}</Text>
    </View>
  );
};

export default Card;
