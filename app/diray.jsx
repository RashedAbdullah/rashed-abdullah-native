import React, { useState } from "react";
import { View, Text, ScrollView, TouchableOpacity } from "react-native";

const diaryEntries = [
  {
    id: "1",
    date: "০১ জানুয়ারি, ২০২৫",
    title: "নতুন বছরের পরিকল্পনা",
    content:
      "আজ আমি নতুন বছরের জন্য কিছু লক্ষ্য স্থির করেছি। আল্লাহর উপর ভরসা করে শুরু করতে চাই।",
    year: "২০২৫",
  },
  {
    id: "2",
    date: "৩১ ডিসেম্বর, ২০২৪",
    title: "গত বছরের সমাপ্তি",
    content: "বছরের শেষ দিনটা অনেক সুন্দর ছিল। পরিবার নিয়ে অনেক সময় কাটিয়েছি।",
    year: "২০২৪",
  },
];

const categories = ["২০২৫", "২০২৪", "২০২৩", "২০২২", "২০২১", "২০২০", "২০১৯"]; // Categories for years

const DiaryScreen = () => {
  const [selectedCategory, setSelectedCategory] = useState("সকল");

  // Filter diary entries by selected year
  const filteredEntries =
    selectedCategory === "সকল"
      ? diaryEntries
      : diaryEntries.filter((entry) => entry.year === selectedCategory);

  return (
    <View className="flex-1 bg-[#C5DEFE] dark:bg-[#0f172a]">
      {/* Categories */}
      <View className="bg-[#e0ecfc] dark:bg-[#1e293b] py-4">
        <ScrollView
          horizontal
          className="flex-row px-4"
          showsHorizontalScrollIndicator={false}
        >
          {categories.map((category) => (
            <TouchableOpacity
              key={category}
              onPress={() => setSelectedCategory(category)}
              className={`px-4 py-2 mr-2 rounded-full ${
                selectedCategory === category
                  ? "bg-[#0f172a] text-[#C5DEFE] dark:bg-[#C5DEFE] dark:text-[#0f172a]"
                  : "bg-gray-200 text-gray-700 dark:bg-gray-700 dark:text-gray-300"
              }`}
            >
              <Text
                className={`text-sm font-semibold ${
                  selectedCategory === category
                    ? "text-[#C5DEFE] dark:text-[#0f172a]"
                    : "text-gray-700 dark:text-gray-300"
                }`}
              >
                {category} ইং
              </Text>
            </TouchableOpacity>
          ))}
        </ScrollView>
      </View>

      {/* Diary Entries */}
      <ScrollView className="px-4 mt-4">
        {filteredEntries.length > 0 ? (
          filteredEntries.map((entry) => (
            <View
              key={entry.id}
              className="mb-6 p-4 bg-white dark:bg-[#1e293b] rounded-xl shadow-lg"
            >
              {/* Date */}
              <View className="flex-row items-center">
                <Text className="text-lg text-gray-500 dark:text-gray-400">
                  {entry.date} ইং
                </Text>
              </View>

              {/* Content */}
              <Text
                className="text-md text-[#334155] dark:text-[#94a3b8] mt-2 leading-6"
                numberOfLines={3}
              >
                {entry.content}
              </Text>

              {/* Read More */}
              <TouchableOpacity className="mt-3">
                <Text className="text-sm font-semibold text-[#0f172a] dark:text-[#C5DEFE]">
                  আরও পড়ুন →
                </Text>
              </TouchableOpacity>
            </View>
          ))
        ) : (
          <View className="flex-1 items-center justify-center">
            <Text className="text-lg font-semibold text-gray-500 dark:text-gray-400">
              কোন দিনলিপি পাওয়া যায়নি।
            </Text>
          </View>
        )}
      </ScrollView>
    </View>
  );
};

export default DiaryScreen;
