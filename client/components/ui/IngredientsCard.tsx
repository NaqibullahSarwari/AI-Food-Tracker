import React from "react";
import { View, Text } from "react-native";
import tw from "twrnc";

const IngredientsCard = () => {
  return (
    <>
      <View
        style={tw`bg-white w-95 h-28 rounded-3xl shadow:bg-gray-300 shadow-md mt-6`}
      >
        <Text style={tw`font-semibold text-[#000000] text-[23px] pt-4 pl-6`}>
          Ingredients
        </Text>
        <Text style={tw`text-gray-400 font-normal text-[21px] pt-2 pl-6`}>
          Organic Grade A Milk, Vitamin D3.
        </Text>
      </View>
    </>
  );
};

export default IngredientsCard;
