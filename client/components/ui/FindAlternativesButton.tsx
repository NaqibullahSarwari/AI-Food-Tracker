import { Text, View, TouchableOpacity } from "react-native";
import React from "react";
import tw from "twrnc";
import { useRouter } from "expo-router";

const FindAlternativesButton = () => {
  const router = useRouter();
  return (
    <View style={tw`mt-12 mb-4`}>
      <TouchableOpacity
        onPress={() => router.push("/find-alternatives")}
        style={tw`flex justify-center items-center bg-[#000000] w-95 h-18 rounded-[100px]`}
      >
        <Text style={tw`text-[#FFFFFF] font-medium text-xl`}>
          Find Healtier Alternatives
        </Text>
      </TouchableOpacity>
    </View>
  );
};

export default FindAlternativesButton;
