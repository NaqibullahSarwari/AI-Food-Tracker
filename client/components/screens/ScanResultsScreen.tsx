import React from "react";
import tw from "twrnc";
import { View, ScrollView } from "react-native";
import NutritionFactsCard from "../ui/NutritionFactsCard";
import IngredientsCard from "../ui/IngredientsCard";
import AnalysisCard from "../ui/AnalysisCard";
import FoodPropertiesCard from "../ui/FoodPropertiesCard";
import FindAlternativesButton from "../ui/FindAlternativesButton";

const ScanResultsScreen = () => {
  return (
    <>
      <ScrollView>
        <View style={tw`flex justify-center items-center bg-[#F3F4F6]`}>
          <FoodPropertiesCard />
          <IngredientsCard />
          <NutritionFactsCard />
          <AnalysisCard />
          <FindAlternativesButton />
        </View>
      </ScrollView>
    </>
  );
};

export default ScanResultsScreen;
