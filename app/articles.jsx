import React, { useState } from "react";
import { View, Text, ScrollView, TouchableOpacity, Image } from "react-native";

const articles = [
  {
    id: "1",
    title: "React Native দিয়ে অ্যাপ ডেভেলপমেন্ট",
    content:
      "React Native হল একটি জনপ্রিয় ফ্রেমওয়ার্ক যা ক্রস-প্ল্যাটফর্ম অ্যাপ ডেভেলপমেন্টে ব্যবহৃত হয়।",
    category: "প্রযুক্তি",
    date: "১ জানুয়ারি, ২০২৫",
    thumbnail: "https://via.placeholder.com/400x200?text=React+Native",
  },
  {
    id: "2",
    title: "ইসলামের মৌলিক শিক্ষা",
    content:
      "ইসলামের মৌলিক শিক্ষা মানব জীবনে সঠিক দিকনির্দেশনা প্রদান করে। কুরআন ও হাদিস এর মূল উৎস।",
    category: "ইসলামিক",
    date: "২ জানুয়ারি, ২০২৫",
    thumbnail: "https://via.placeholder.com/400x200?text=Islamic+Education",
  },
  {
    id: "3",
    title: "কর্মক্ষেত্রে দক্ষতা বৃদ্ধি",
    content:
      "কর্মক্ষেত্রে দক্ষতা বৃদ্ধির জন্য নিয়মিত শিক্ষাগ্রহণ ও প্র্যাকটিস অত্যন্ত গুরুত্বপূর্ণ।",
    category: "উন্নয়ন",
    date: "৩১ ডিসেম্বর, ২০২৪",
    thumbnail: "https://via.placeholder.com/400x200?text=Skill+Improvement",
  },
];

const categories = ["সকল", "প্রযুক্তি", "ইসলামিক", "উন্নয়ন"];

const ArticlesScreen = () => {
  const [selectedCategory, setSelectedCategory] = useState("সকল");

  // Filter articles based on selected category
  const filteredArticles =
    selectedCategory === "সকল"
      ? articles
      : articles.filter((article) => article.category === selectedCategory);

  return (
    <View className="flex-1 bg-[#C5DEFE] dark:bg-[#0f172a]">
      {/* Category Filter */}
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
                {category}
              </Text>
            </TouchableOpacity>
          ))}
        </ScrollView>
      </View>

      {/* Articles List */}
      <ScrollView className="px-4 mt-4">
        {filteredArticles.length > 0 ? (
          filteredArticles.map((article) => (
            <View
              key={article.id}
              className="mb-6 bg-white dark:bg-[#1e293b] rounded-xl shadow-lg"
            >
              {/* Article Image */}
              <Image
                source={{ uri: article.thumbnail }}
                className="w-full h-48 rounded-t-xl"
                resizeMode="cover"
              />

              {/* Article Content */}
              <View className="p-4">
                {/* Title */}
                <Text className="text-lg font-semibold text-[#0f172a] dark:text-[#C5DEFE]">
                  {article.title}
                </Text>

                {/* Date */}
                <Text className="text-sm text-gray-500 dark:text-gray-400 mt-1">
                  {article.date}
                </Text>

                {/* Content Preview */}
                <Text
                  className="text-md text-[#334155] dark:text-[#94a3b8] mt-2 leading-6"
                  numberOfLines={3}
                >
                  {article.content}
                </Text>

                {/* Read More */}
                <TouchableOpacity className="mt-3">
                  <Text className="text-sm font-semibold text-[#0f172a] dark:text-[#C5DEFE]">
                    আরও পড়ুন →
                  </Text>
                </TouchableOpacity>
              </View>
            </View>
          ))
        ) : (
          <View className="flex-1 items-center justify-center">
            <Text className="text-lg font-semibold text-gray-500 dark:text-gray-400">
              কোন আর্টিকেল পাওয়া যায়নি।
            </Text>
          </View>
        )}
      </ScrollView>
    </View>
  );
};

export default ArticlesScreen;
