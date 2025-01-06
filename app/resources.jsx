import React from "react";
import { View, Text, ScrollView, TouchableOpacity } from "react-native";

const learningResources = [
  {
    id: "1",
    title: "React Native টিউটোরিয়াল",
    description: "React Native থেকে অ্যাপ ডেভেলপমেন্ট শিখুন।",
    url: "https://reactnative.dev/",
  },
  {
    id: "2",
    title: "জাভাস্ক্রিপ্ট বেসিকস",
    description: "জাভাস্ক্রিপ্টের ভিত্তি শিখুন এবং প্রোগ্রামিং দক্ষতা বাড়ান।",
    url: "https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide",
  },
  {
    id: "3",
    title: "UI/UX ডিজাইন প্রিন্সিপলস",
    description:
      "UI/UX ডিজাইনের মূল বিষয়গুলি শিখুন এবং চমৎকার ইন্টারফেস তৈরি করুন।",
    url: "https://www.interaction-design.org/",
  },
];

const LearningResourcesScreen = () => {
  return (
    <View className="flex-1 bg-[#C5DEFE] dark:bg-[#0f172a]">
      {/* Resource List */}
      <ScrollView className="px-4 mt-6">
        {learningResources.map((resource) => (
          <View
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

            {/* Action Button */}
            <TouchableOpacity
              onPress={() => console.log(`Opening: ${resource.url}`)}
              className="mt-3 py-2 px-4 bg-[#0f172a] dark:bg-[#C5DEFE] rounded-full"
            >
              <Text className="text-center text-sm font-bold text-white dark:text-[#0f172a]">
                বিস্তারিত জানুন
              </Text>
            </TouchableOpacity>
          </View>
        ))}
      </ScrollView>
    </View>
  );
};

export default LearningResourcesScreen;
