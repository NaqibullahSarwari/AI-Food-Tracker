import { Text, View, TouchableOpacity } from "react-native";
import React from "react";
import tw from "twrnc";
import { useRouter } from "expo-router";

const ButtonUI = () => {
  const router = useRouter();
  return (
    <View style={tw`mt-8`}>
      <TouchableOpacity
        onPress={() => router.push("/scan-results-screen")}
        style={tw`flex justify-center items-center bg-[#000000] w-95 h-18 rounded-xl`}
      >
        <Text style={tw`text-[#FFFFFF] font-medium text-xl`}>Continue</Text>
      </TouchableOpacity>
    </View>
  );
};

export default ButtonUI;
