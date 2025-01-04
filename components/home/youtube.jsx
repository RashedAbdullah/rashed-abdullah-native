import { View, Text, Image, TouchableOpacity, Linking } from "react-native";
import React from "react";

const YouTubeSection = () => {
  return (
    <View className="mt-10">
      {/* Title */}
      <Text className="text-2xl text-center font-bold text-[#0f172a] dark:text-white mb-4">
        আমার ইউটিউব চ্যানেল
      </Text>

      {/* Subscribe Button */}
      <TouchableOpacity
        onPress={() =>
          Linking.openURL("https://www.youtube.com/@RashedAbdullahBD")
        }
        className="bg-red-600 py-3 rounded-full mx-auto w-3/4 mb-6"
      >
        <Text className="text-center text-white font-bold text-lg">
          সাবস্ক্রাইব করুন
        </Text>
      </TouchableOpacity>

      {/* Video Cards */}
      <View
        style={{
          flexDirection: "row",
          flexWrap: "wrap",
          justifyContent: "space-between",
        }}
      >
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
