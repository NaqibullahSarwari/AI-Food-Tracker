import React from "react";
import { Text, View, TextInput, TouchableOpacity } from "react-native";
import tw from "twrnc";
import { useRouter } from "expo-router";

const SetNewPasswordScreen = () => {
  const router = useRouter();
  return (
    <>
      <View style={tw`bg-[#F3F4F6]`}>
        <View style={tw`mt-6 ml-6`}>
          <Text style={tw`font-semibold text-[#000000] text-[33px] pt-8 ml-8`}>
            Set New Password
          </Text>
          <View style={tw`mt-12`}>
            <Text style={tw`text-[#6B7280] text-xl font-medium`}>
              New Password
            </Text>
            <TextInput
              style={tw`bg-[#FFFFFF] mt-2 text-[#D1D5DB] text-lg pl-4 font-semibold h-20 w-95 rounded-xl shadow:bg-black shadow-md`}
              placeholder="Enter your New Password"
            />
          </View>
          <View>
            <Text style={tw`text-[#6B7280] text-xl font-medium mt-2`}>
              Confirm New Password
            </Text>
            <TextInput
              style={tw`bg-[#FFFFFF] mt-2 text-[#D1D5DB] text-lg pl-4 font-semibold h-20 w-95 rounded-xl shadow:bg-black shadow-md`}
              placeholder="Confirm your New Password"
            />
          </View>
        </View>
        <View style={tw`mt-98`}>
          <TouchableOpacity
            onPress={() => router.push("/sign-in")}
            style={tw`ml-6 flex justify-center items-center bg-[#000000] w-95 h-18 rounded-xl`}
          >
            <Text style={tw`text-[#FFFFFF] font-medium text-xl`}>
              Reset Password
            </Text>
          </TouchableOpacity>
        </View>
      </View>
    </>
  );
};

export default SetNewPasswordScreen;
