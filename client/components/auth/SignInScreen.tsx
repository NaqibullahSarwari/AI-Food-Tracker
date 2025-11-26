import { Text, View } from "react-native";
import tw from "twrnc";
import React from "react";
import InputEmailField from "../ui/InputEmailField";
import PrimaryButton from "../ui/PrimaryButton";
import { useRouter } from "expo-router";

export default function SignInScreen() {
  const router = useRouter();
  return (
    <>
      <View style={tw`flex justify-center items-center bg-[#F3F4F6] mt-20`}>
        <Text style={tw`font-semibold text-[#000000] text-[32px] pt-8`}>
          Already have an account?
        </Text>
        <View style={tw`flex justify-center items-center`}>
          <Text style={tw`text-[#9CA3AF] font-semibold text-[19px] pt-2`}>
            Don't have an account?
            <Text
              onPress={() => router.push("/register")}
              style={tw`text-black font-bold text-[19px] pt-2 pl-2`}
            >
              Create an account
            </Text>
          </Text>
        </View>
        <InputEmailField />
        <Text
          onPress={() => router.push("/forgot-password")}
          style={tw`text-[#9CA3AF] font-semibold text-[19px] pt-2 pr-55`}
        >
          Forgot Password?
        </Text>
        <PrimaryButton />
        <View style={tw`flex-row justify-center items-center my-6 px-4`}>
          <Text style={tw`text-[#6B7280] font-semibold text-xl`}>
            or continue with
          </Text>
        </View>
      </View>
    </>
  );
}
