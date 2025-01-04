import React from "react";
import { View, Text, ScrollView, Image, TouchableOpacity } from "react-native";
import { Ionicons } from "@expo/vector-icons";

const videos = [
  {
    id: "1",
    title: "বিস্ময়কর কুরআন তিলাওয়াত | Amazing Quran Recitation",
    channel: "আহলাম Ahlam",
    views: "৫.২K",
    time: "১ দিন আগে",
    thumbnail: "https://via.placeholder.com/350x200",
  },
  {
    id: "2",
    title: "ইসলামিক গান | Nasheed for Peace",
    channel: "আহলাম Ahlam",
    views: "৩.৮K",
    time: "২ দিন আগে",
    thumbnail: "https://via.placeholder.com/350x200",
  },
  {
    id: "3",
    title: "পাঠ্য রিসোর্সের গুরুত্ব | Learning Resources",
    channel: "আহলাম Ahlam",
    views: "২.১K",
    time: "৩ দিন আগে",
    thumbnail: "https://via.placeholder.com/350x200",
  },
];

const YoutubeScreen = () => {
  return (
    <View className="flex-1 bg-[#C5DEFE] dark:bg-[#0f172a]">
      {/* Header */}
      <View className="flex-row items-center justify-between px-4 py-3 bg-white dark:bg-[#1e293b] shadow-md">
        <Text className="text-2xl font-bold text-[#0f172a] dark:text-[#C5DEFE]">
          YouTube
        </Text>
        <View className="flex-row space-x-4">
          <Ionicons
            name="search-outline"
            size={24}
            color="#0f172a"
            className="dark:text-[#C5DEFE]"
          />
          <Ionicons
            name="notifications-outline"
            size={24}
            color="#0f172a"
            className="dark:text-[#C5DEFE]"
          />
        </View>
      </View>

      {/* Video Feed */}
      <ScrollView className="px-4">
        {videos.map((video) => (
          <TouchableOpacity key={video.id} className="mb-6">
            {/* Thumbnail */}
            <Image
              source={{ uri: video.thumbnail }}
              className="w-full h-48 rounded-lg"
              resizeMode="cover"
            />

            {/* Video Info */}
            <View className="flex-row mt-2">
              {/* Video Text Details */}
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
    </View>
  );
};

export default YoutubeScreen;
