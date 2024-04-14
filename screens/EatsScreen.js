import { ScrollView, Text, View } from "react-native";
import React, { useLayoutEffect } from "react";
import tw from "twrnc";
import { useNavigation } from "@react-navigation/native";
import { SafeAreaView, Image, TextInput } from "react-native";
import {
  AdjustmentsHorizontalIcon,
  ChevronDownIcon,
  MagnifyingGlassIcon,
  UserIcon,
} from "react-native-heroicons/solid";
import Categories from "../components/Categories";
import FeaturedRow from "../components/FeaturedRow";

const EatsScreen = () => {
  const navigation = useNavigation();
  useLayoutEffect(() => {
    navigation.setOptions({
      headerShow: false,
    });
  });

  return (
    <SafeAreaView style={tw`bg-white`}>
      {/* Header */}
      <View style={tw`flex-row pb-1 items-center mx-2 space-x-2`}>
        <Image
          style={tw`h-10 w-10 bg-gray-300  m-2 rounded-full`}
          source={{
            uri: "https://links.papareact.com/wru",
          }}
        />
        <View style={tw`flex-1`}>
          <Text style={tw`font-bold text-gray-400 text-xs`}>Deliver Now</Text>
          <Text style={tw`font-bold text-l`}>
            Current Location
            <ChevronDownIcon color={"black"} />
          </Text>
        </View>
        <UserIcon style={tw` m-2`} size={20} color="black" />
      </View>
      {/* Search  AND ADJUSTMENT ICON*/}
      <View style={tw`flex-row items-center space-x-2 pb-2 mx-4 gap-5 `}>
        <View
          style={tw`flex-row flex-1 space-x-2 bg-gray-200 p-3 rounded-full`}
        >
          {/* Search Input Only*/}
          <MagnifyingGlassIcon color={"black"} />
          <TextInput
            style={tw`flex-1`}
            placeholder="Search local restaurants"
            keyboardType="default"
          />
        </View>
        <AdjustmentsHorizontalIcon color={"black"} />
      </View>

      <ScrollView style={tw`bg-gray-100`}>
        {/* Categories  */}
        <Categories />
        {/* Featured Row  */}
        <FeaturedRow
          id="1"
          title="Discounts"
          description="Paid placement"
          featuredCategory="featured"
        />
        {/* Featured Row  */}
        <FeaturedRow
          id="2"
          title="Offers Near You"
          description="Paid placement"
          featuredCategory="featured"
        />
      </ScrollView>
    </SafeAreaView>
  );
};
export default EatsScreen;
