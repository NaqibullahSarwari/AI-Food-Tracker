import React from "react";
import { View, Text } from "react-native";
import tw from "twrnc";

const NutritionFactsCard = () => {
  return (
    <>
      <View
        style={tw`bg-white w-95 h-80 rounded-3xl shadow:bg-gray-300 shadow-md mt-4`}
      >
        <Text style={tw`font-semibold text-[#000000] text-[23px] pl-6 pt-8`}>
          Nutrition Facts
        </Text>
        <Text style={tw`font-normal text-[#000000] text-[21px] pt-4 pl-6`}>
          Calories
          <Text style={tw`font-bold text-[#000000] text-[21px] pl-50`}>
            120
          </Text>
        </Text>
        <View
          style={tw`border-gray-300 border-2 border-t-0 border-l-0 border-r-0 pt-3 w-85 ml-5`}
        ></View>
        <Text style={tw`font-normal text-[#000000] text-[21px] pt-4 pl-6`}>
          Total Fats
          <Text style={tw`font-bold text-[#000000] text-[21px] pl-48`}>
            24g
          </Text>
        </Text>
        <View
          style={tw`border-gray-300 border-2 border-t-0 border-l-0 border-r-0 pt-3 w-85 ml-5`}
        ></View>
        <Text style={tw`font-normal text-[#000000] text-[21px] pt-4 pl-6`}>
          Total Sugers
          <Text style={tw`font-bold text-[#000000] text-[21px] pl-41`}>
            13g
          </Text>
        </Text>
        <View
          style={tw`border-gray-300 border-2 border-t-0 border-l-0 border-r-0 pt-3 w-85 ml-5`}
        ></View>
        <Text style={tw`font-normal text-[#000000] text-[21px] pt-4 pl-6`}>
          Proteins
          <Text style={tw`font-bold text-[#000000] text-[21px] pl-51`}>
            37g
          </Text>
        </Text>
      </View>
    </>
  );
};

export default NutritionFactsCard;
