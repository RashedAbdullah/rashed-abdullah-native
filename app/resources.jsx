import React from "react";
import { View, Text, ScrollView, TouchableOpacity } from "react-native";
import { learningResources } from "../data/learing-resources";

const LearningResourcesScreen = () => {
  return (
    <View className="flex-1 bg-[#C5DEFE] dark:bg-[#0f172a]">
      {/* Resource List */}
      <ScrollView className="px-4 mt-6">
        {learningResources.map((resource) => (
          <TouchableOpacity
            onPress={() => console.log(`Opening: ${resource.url}`)}
            key={resource.id}
            className="mb-5 p-4 bg-white dark:bg-[#1e293b] rounded-2xl shadow-lg"
          >
            {/* Title */}
            <Text className="text-lg font-bold text-[#0f172a] dark:text-[#C5DEFE]">
              {resource.title}
            </Text>

            {/* Description */}
            <Text className="text-sm text-[#334155] dark:text-[#94a3b8] mt-2 leading-6">
              {resource.description}
            </Text>
          </TouchableOpacity>
        ))}
      </ScrollView>
    </View>
  );
};

export default LearningResourcesScreen;
