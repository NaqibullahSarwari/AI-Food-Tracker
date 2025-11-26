import React from "react";
import { View, Text } from "react-native";
import tw from "twrnc";

const FoodPropertiesCard = () => {
  return (
    <>
      <View style={tw`flex justify-center items-center`}>
        <View
          style={tw`flex justify-center items-center bg-black h-30 w-30 rounded-full mt-8`}
        >
          <Text style={tw`font-bold text-6xl text-white`}>A</Text>
        </View>
        <Text style={tw`font-semibold text-[#000000] text-[32px] mt-4`}>
          Organic Whole Milk
        </Text>
        <Text style={tw`text-gray-400 font-normal text-[21px] pt-2`}>
          Good & Gather
        </Text>
      </View>
    </>
  );
};

export default FoodPropertiesCard;
