import { View, Text, TouchableOpacity, Image } from "react-native";
import React from "react";
import tw from "twrnc";
import { MapPinIcon, StarIcon } from "react-native-heroicons/solid";
import { Marker } from "react-native-svg";

const ResturantCard = ({
  id,
  imgUrl,
  title,
  rating,
  genre,
  address,
  short_description,
  dishes,
  long,
  lat,
}) => {
  return (
    <TouchableOpacity style={tw`bg-white mr-2 shadow rounded-lg`}>
      <Image
        source={{
          uri: imgUrl,
        }}
        style={tw`h-36 w-54 rounded-lg`}
      />
      <View style={tw`px-3 pb-4`}>
        <Text style={tw`font-bold text-lg pt-2`}>{title}</Text>
        <View style={tw`flex-row items-center gap-2`}>
          <StarIcon color="#EDC001" opacity={0.5} />
          <Text>
            <Text style={tw`text-yellow-600`}>{rating}</Text> · {genre}
          </Text>
        </View>
        <View style={tw`flex-row gap-2`}>
          <MapPinIcon color="Red" opacity={0.6} size={22} />
          <Text>Near · {address}</Text>
        </View>
      </View>
    </TouchableOpacity>
  );
};

export default ResturantCard;
