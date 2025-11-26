import { Text, View } from "react-native";
import tw from "twrnc";
import React from "react";
import InputEmailField from "../ui/InputEmailField";
import PrimaryButton from "../ui/PrimaryButton";
import Header from "../ui/Header";
import InputPasswordField from "../ui/InputPasswordField";
import { useRouter } from "expo-router";

export default function RegisterScreen() {
  const router = useRouter();

  return (
    <>
      <View style={tw`flex justify-center items-center bg-[#F3F4F6]`}>
        <Header />
        <View style={tw`flex justify-center items-center`}>
          <Text style={tw`text-[#9CA3AF] font-semibold text-[19px] pt-2`}>
            Already have an account?
          </Text>
          <Text
            onPress={() => router.push("/sign-in")}
            style={tw`text-black font-bold text-[19px] pt-1 pl-2`}
          >
            Sign in to your account
          </Text>
        </View>
        <InputEmailField />
        <InputPasswordField />
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
