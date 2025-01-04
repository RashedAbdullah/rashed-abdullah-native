import { View, Text } from "react-native";
import React from "react";
import { Link } from "expo-router";

const NotFoundScreen = () => {
  return (
    <View className="flex-1 items-center justify-center bg-[#C5DEFE] dark:bg-[#0f172a]">
      <Text className="text-6xl font-bold text-[#0f172a] dark:text-[#C5DEFE] mb-6">
        404
      </Text>
      <Text className="text-xl text-[#1e293b] dark:text-[#94a3b8] text-center px-6 mb-6">
        আপনি যে পৃষ্ঠাটি খুঁজছেন, তা খুঁজে পাওয়া যায়নি।
      </Text>
      <Link
        href="/"
        className="bg-[#0f172a] dark:bg-[#C5DEFE] px-6 py-3 rounded-lg shadow-md"
      >
        <Text className="text-white dark:text-[#0f172a] text-lg font-semibold">
          হোমে ফিরে যান
        </Text>
      </Link>
    </View>
  );
};

export default NotFoundScreen;
