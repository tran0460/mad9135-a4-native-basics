import { Text, Image } from "react-native";
import React from "react";
import { TouchableOpacity } from "react-native-gesture-handler";

const Card = ({ data }) => {
  return (
    <TouchableOpacity>
      <Text>*****</Text>
      <Image
        style={{ width: 300, height: 300 }}
        source={{ uri: data.movie_banner }}
      />
      <Text>{data.title}</Text>
      <Text>{data.director}</Text>
      <Text>{data.original_title_romanised}</Text>
      <Text>{data.release_date}</Text>
    </TouchableOpacity>
  );
};

export default Card;
