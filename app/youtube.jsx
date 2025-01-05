import React, { useState } from "react";
import { View, Text, ScrollView, Image, TouchableOpacity } from "react-native";

const videos = [
  {
    id: "1",
    title: "বিস্ময়কর কুরআন তিলাওয়াত | Amazing Quran Recitation",
    channel: "আহলাম Ahlam",
    views: "৫.২K",
    time: "১ দিন আগে",
    thumbnail: "https://via.placeholder.com/350x200",
    category: "Quran",
  },
  {
    id: "2",
    title: "ইসলামিক গান | Nasheed for Peace",
    channel: "আহলাম Ahlam",
    views: "৩.৮K",
    time: "২ দিন আগে",
    thumbnail: "https://via.placeholder.com/350x200",
    category: "Nasheed",
  },
  {
    id: "3",
    title: "পাঠ্য রিসোর্সের গুরুত্ব | Learning Resources",
    channel: "আহলাম Ahlam",
    views: "২.১K",
    time: "৩ দিন আগে",
    thumbnail: "https://via.placeholder.com/350x200",
    category: "Learning",
  },
];

const categories = ["সব", "কুরআন", "নাশীদ", "লার্নিং"];

const YoutubeScreen = () => {
  const [selectedCategory, setSelectedCategory] = useState("সব");

  // Filter videos by category
  const filteredVideos =
    selectedCategory === "সব"
      ? videos
      : videos.filter((video) => video.category === selectedCategory);

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
                {category}
              </Text>
            </TouchableOpacity>
          ))}
        </ScrollView>
      </View>

      {/* Video Feed */}
      <View className="flex-1 px-4 py-4">
        {filteredVideos.length > 0 ? (
          <ScrollView showsVerticalScrollIndicator={false}>
            {filteredVideos.map((video) => (
              <TouchableOpacity key={video.id} className="mb-6">
                {/* Thumbnail */}
                <Image
                  source={{ uri: video.thumbnail }}
                  className="w-full h-48 rounded-lg"
                  resizeMode="cover"
                />

                {/* Video Info */}
                <View className="flex-row mt-2">
                  <View className="flex-1 ml-3">
                    <Text className="text-lg font-semibold text-[#0f172a] dark:text-[#C5DEFE]">
                      {video.title}
                    </Text>
                    <Text className="text-sm text-gray-500 dark:text-gray-400">
                      {video.channel} • {video.views} ভিউ • {video.time}
                    </Text>
                  </View>
                </View>
              </TouchableOpacity>
            ))}
          </ScrollView>
        ) : (
          // No Videos Found Message
          <View className="flex-1 items-center justify-center">
            <Text className="text-lg font-semibold text-gray-500 dark:text-gray-400">
              ভিডিও পাওয়া যায়নি
            </Text>
          </View>
        )}
      </View>
    </View>
  );
};

export default YoutubeScreen;
