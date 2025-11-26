import React from "react";
import { Text, View, Image } from "react-native";
import tw from "twrnc";

const Header = () => {
  return (
    <>
      <View
        style={tw`flex justify-center items-center w-20 h-20 bg-gray-200 rounded-full mt-12`}
      >
        <Image
          source={require("../../assets/lamp-icon.png")}
          style={{ width: 50, height: 50 }}
        />
      </View>
      <Text style={tw`font-semibold text-[#000000] text-[38px] pt-8`}>
        Let's get started
      </Text>
    </>
  );
};

export default Header;
