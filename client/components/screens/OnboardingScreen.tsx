import React from "react";
import { Text, TouchableOpacity, View } from "react-native";
import tw from "twrnc";
import { useRouter } from "expo-router";

const OnboardingScreen = () => {
  const router = useRouter();
  return (
    <>
      <View style={tw`bg-[#F3F4F6]`}>
        <View style={tw`flex justify-center items-center mt-50`}>
          <Text style={tw`font-semibold text-[#000000] text-[40px] pt-8`}>
            Welcome to Nudrio
          </Text>
          <Text
            style={tw`text-gray-600 font-normal text-[22px] pt-2 pl-6 pr-4`}
          >
            Scan any product, instantly understand its nutrition.
          </Text>
        </View>
        <View style={tw`mt-12`}>
          <View style={tw`mt-8`}>
            <TouchableOpacity
              onPress={() => router.push("/register")}
              style={tw`ml-8 flex justify-center items-center bg-[#000000] w-95 h-18 rounded-xl`}
            >
              <Text style={tw`text-[#FFFFFF] font-medium text-xl`}>
                Sign up
              </Text>
            </TouchableOpacity>
          </View>

          <View style={tw`mt-4`}>
            <TouchableOpacity
              onPress={() => router.push("/sign-in")}
              style={tw`ml-8 flex justify-center items-center bg-[#000000] w-95 h-18 rounded-xl`}
            >
              <Text style={tw`text-[#FFFFFF] font-medium text-xl`}>
                Sign in
              </Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    </>
  );
};

export default OnboardingScreen;
