import { View, Text, ScrollView } from "react-native";
import React from "react";
import tailwind from "twrnc";
import { ArrowRightIcon } from "react-native-heroicons/solid";
import ResturantCard from "./ResturantCard";

const FeaturedRow = ({ id, title, description }) => {
  return (
    <View>
      <View style={tailwind`mt-4 flex-row items-center justify-between px-4`}>
        <Text style={tailwind`font-bold text-lg`}>{title}</Text>
        <ArrowRightIcon color="black" />
      </View>
      <Text style={tailwind`text-xs text-gray-500 px-4`}>{description}</Text>

      <ScrollView
        horizontal
        contentContainerStyle={{
          paddingHorizontal: 15,
        }}
        showsHorizontalScrollIndicator={false}
        style={tailwind`pt-4`}
      >
        {/* Resturant Card */}
        <ResturantCard
          id={123}
          imgUrl="https://links.papareact.com/gn7"
          title="Friends"
          rating={4.5}
          genre="Japanese"
          address=" Peppergrove"
          short_description="Asian cuisine"
          dishes={[]}
          long={20}
          lat={0}
        />

        <ResturantCard
          id={123}
          imgUrl="https://links.papareact.com/gn7"
          title="Friends"
          rating={4.5}
          genre="Japanese"
          address=" Peppergrove"
          short_description="Asian cuisine"
          dishes={[]}
          long={20}
          lat={0}
        />

        <ResturantCard
          id={123}
          imgUrl="https://links.papareact.com/gn7"
          title="Friends"
          rating={4.5}
          genre="Japanese"
          address=" Peppergrove"
          short_description="Asian cuisine"
          dishes={[]}
          long={20}
          lat={0}
        />

        <ResturantCard
          id={123}
          imgUrl="https://links.papareact.com/gn7"
          title="Friends"
          rating={4.5}
          genre="Japanese"
          address=" Peppergrove"
          short_description="Asian cuisine"
          dishes={[]}
          long={20}
          lat={0}
        />
      </ScrollView>
    </View>
  );
};

export default FeaturedRow;
