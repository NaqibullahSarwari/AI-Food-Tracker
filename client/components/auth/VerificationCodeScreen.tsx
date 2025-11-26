import { useRouter } from "expo-router";
import React from "react";
import { View, Text, TextInput, TouchableOpacity } from "react-native";
import tw from "twrnc";

const VerificationCodeScreen = () => {
  const router = useRouter();
  return (
    <>
      <View style={tw`flex justify-center items-center bg-[#F3F4F6] mt-40`}>
        <Text style={tw`font-semibold text-[#000000] text-[32px] pt-8`}>
          Enter Vertification Code
        </Text>
        <Text
          style={tw`text-[#9CA3AF] font-semibold text-[19px] pt-4 pl-6 pr-6`}
        >
          We've sent you a 6-digit verification code to your email.
        </Text>
        <View
          style={tw`flex justify-center items-center bg-white h-25 w-90 rounded-xl mt-4`}
        >
          <TextInput
            style={tw`bg-[#F3F4F6] h-16 w-12 rounded-xl border-gray-300 border-2`}
          ></TextInput>
        </View>
        <View style={tw`flexjustify-center items-center pt-8`}>
          <TouchableOpacity
            onPress={() => router.push("/set-new-password")}
            style={tw`flex justify-center items-center bg-[#000000] w-91 h-18 rounded-xl`}
          >
            <Text style={tw`text-[#FFFFFF] font-medium text-xl`}>Verify</Text>
          </TouchableOpacity>
          <View style={tw`flex justify-center items-center`}>
            <Text style={tw`text-[#9CA3AF] font-semibold text-[19px] pt-4`}>
              Didn't receive the code?
              <Text style={tw`text-black font-bold text-[19px] pt-2 pl-2`}>
                Resend Code
              </Text>
            </Text>
          </View>
        </View>
      </View>
    </>
  );
};

export default VerificationCodeScreen;
