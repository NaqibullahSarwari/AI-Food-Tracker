import React from "react";
import { View, Text } from "react-native";
import tw from "twrnc";

const AnalysisCard = () => {
  return (
    <>
      <View
        style={tw`bg-white w-95 h-64 rounded-3xl shadow:bg-gray-300 shadow-mdg mt-4`}
      >
        <Text style={tw`font-semibold text-[#000000] text-[23px] pl-6 pt-8`}>
          Our Analysis
        </Text>
        <Text style={tw`font-normal text-[#000000] text-[21px] pt-4 pl-6`}>
          Excellent source of Vitamin D.
        </Text>{" "}
        <Text style={tw`font-normal text-[#000000] text-[21px] pt-4 pl-6`}>
          Organic, from grass-fed cows.
        </Text>{" "}
        <Text style={tw`font-normal text-[#000000] text-[21px] pt-4 pl-6`}>
          Contains saturated fat, consume in moderation.
        </Text>
      </View>
    </>
  );
};

export default AnalysisCard;
