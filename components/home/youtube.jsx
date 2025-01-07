import {
  View,
  Text,
  Image,
  TouchableOpacity,
  Linking,
  ActivityIndicator,
} from "react-native";
import React, { useEffect, useState } from "react";

const YouTubeSection = () => {
  const [videos, setVideos] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const getVideos = async () => {
      try {
        console.log("Fetching videos...");
        const response = await fetch(
          "https://www.rashedabdullah.com/api/videos"
        );

        if (!response.ok) {
          throw new Error(`API error: ${response.status}`);
        }

        const data = await response.json();
        console.log("Fetched data:", data);

        if (Array.isArray(data)) {
          setVideos(data);
        } else {
          console.error("API returned data in an unexpected format:", data);
        }
      } catch (error) {
        console.error("Error fetching videos:", error.message);
      } finally {
        setLoading(false);
      }
    };

    getVideos();
  }, []);

  if (loading) {
    return (
      <View className="flex-1 justify-center items-center">
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
        <ActivityIndicator size="large" color="#0f172a" />
      </View>
    );
  }

  if (videos.length === 0) {
    return (
      <View className="flex-1 justify-center items-center">
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
        <Text className="text-lg text-gray-500 dark:text-gray-300">
          কোনো ভিডিও পাওয়া যায়নি
        </Text>
      </View>
    );
  }

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
        {videos.map((video) => (
          <TouchableOpacity
            key={video.id}
            className="mb-4 w-[48%] bg-white dark:bg-gray-800 rounded-lg shadow-md overflow-hidden"
            onPress={() =>
              Linking.openURL(`https://www.youtube.com/watch?v=${video.id}`)
            }
          >
            <Image
              source={{ uri: video.thumbnailUrl }}
              className="w-full h-28"
              resizeMode="cover"
            />
            <Text className="text-sm font-medium text-[#0f172a] dark:text-gray-200 p-2">
              {video.title}
            </Text>
          </TouchableOpacity>
        ))}
      </View>
    </View>
  );
};

export default YouTubeSection;
