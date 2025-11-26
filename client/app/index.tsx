import { Text, View } from "react-native";
import tw from "twrnc"

export default function Index() {
  return (
    <View
      style={tw`bg-black h-40 w-40`}
    >
      <Text  style={tw`text-white text-3xl font-semibold`}>Hello World</Text>
    </View>
  );
}
