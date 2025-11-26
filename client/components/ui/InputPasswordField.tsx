import React from "react";
import { Text, View, TextInput } from "react-native";
import tw from "twrnc";

const InputPasswordField = () => {
  return (
    <>
      <View style={tw`mt-4`}>
        <Text style={tw`text-[#6B7280] text-xl font-medium`}>Password</Text>
        <TextInput
          style={tw`bg-[#FFFFFF] mt-1 text-[#D1D5DB] text-lg pl-4 font-semibold h-20 w-95 rounded-xl shadow:bg-black shadow-md`}
          placeholder="Enter your Password"
        />
      </View>
    </>
  );
};

export default InputPasswordField;
