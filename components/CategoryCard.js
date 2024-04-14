import { View, Text, TouchableOpacity, Image } from "react-native";
import React from "react";
import tw from "twrnc";

const CategoryCard = ({ imgUrl, title }) => {
  return (
    <TouchableOpacity>
      <Image source={{ uri: imgUrl }} style={tw`h-20 w-20 m-2 rounded`} />
      <Text>{title}</Text>
    </TouchableOpacity>
  );
};

export default CategoryCard;
