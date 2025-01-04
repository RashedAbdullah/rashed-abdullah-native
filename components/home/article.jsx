import { View, Text, TouchableOpacity } from "react-native";
import React from "react";

const ArticleSection = () => {
  return (
    <View className="mt-8">
      <Text className="text-lg font-bold text-[#0f172a] dark:text-[#C5DEFE]">
        প্রবন্ধ
      </Text>
      <View className="mt-4">
        <TouchableOpacity className="p-4 bg-white dark:bg-[#1e293b] rounded-lg shadow">
          <Text className="text-sm font-semibold text-[#0f172a] dark:text-[#C5DEFE]">
            কীভাবে আমি কোডিং শুরু করলাম
          </Text>
          <Text className="text-xs text-[#475569] dark:text-[#94a3b8] mt-1">
            একজন ডেভেলপার হিসাবে আমার যাত্রার একটি সংক্ষিপ্ত বিবরণ।
          </Text>
        </TouchableOpacity>
        <TouchableOpacity className="p-4 bg-white dark:bg-[#1e293b] rounded-lg shadow mt-4">
          <Text className="text-sm font-semibold text-[#0f172a] dark:text-[#C5DEFE]">
            রিঅ্যাক্ট নেটিভ শেখার টিপস
          </Text>
          <Text className="text-xs text-[#475569] dark:text-[#94a3b8] mt-1">
            রিঅ্যাক্ট নেটিভ ডেভেলপমেন্টে কীভাবে শুরু করবেন তা জানুন।
          </Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default ArticleSection;
