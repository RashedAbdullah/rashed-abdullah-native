import { View, Text, Image, TouchableOpacity } from "react-native";
import React from "react";

const YouTubeSection = () => {
  return (
    <View className="mt-10">
      <Text className="text-2xl font-bold text-[#0f172a] dark:text-white mb-6">
        আমার ইউটিউব চ্যানেল
      </Text>
      <View
        style={{
          flexDirection: "row",
          flexWrap: "wrap",
          justifyContent: "space-between",
        }}
      >
        {/* Example YouTube Video Cards */}
        {Array.from({ length: 4 }).map((_, index) => (
          <TouchableOpacity
            key={index}
            className="mb-4 w-[48%] bg-white dark:bg-gray-800 rounded-lg shadow-md overflow-hidden"
          >
            <Image
              source={{ uri: "https://via.placeholder.com/150" }}
              className="w-full h-28"
            />
            <Text className="text-sm font-medium text-[#0f172a] dark:text-gray-200 p-2">
              ভিডিও শিরোনাম {index + 1}
            </Text>
          </TouchableOpacity>
        ))}
      </View>
    </View>
  );
};

export default YouTubeSection;
