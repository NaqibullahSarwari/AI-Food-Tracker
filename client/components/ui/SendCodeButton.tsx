import { Text, View, TouchableOpacity } from "react-native";
import React from "react";
import tw from "twrnc";
import { useRouter } from "expo-router";

const SendCodeButton = () => {
  const router = useRouter();
  return (
    <View style={tw`mt-135`}>
      <TouchableOpacity
        onPress={() => router.push("/verification-code-screen")}
        style={tw`ml-8 flex justify-center items-center bg-[#000000] w-95 h-18 rounded-xl`}
      >
        <Text style={tw`text-[#FFFFFF] font-medium text-xl`}>Send Code</Text>
      </TouchableOpacity>
    </View>
  );
};

export default SendCodeButton;
