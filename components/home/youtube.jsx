import React, { useEffect, useState } from "react";
import {
  View,
  Text,
  Image,
  TouchableOpacity,
  Linking,
  ActivityIndicator,
  ScrollView,
} from "react-native";

const YouTubeSection = () => {
  const [videos, setVideos] = useState([]);
  const [loading, setLoading] = useState(true); // Ensure loading starts as true
  const [error, setError] = useState(null); // Add error state for better handling

  useEffect(() => {
    const getVideos = async () => {
      try {
        const response = await fetch(
          "https://www.rashedabdullah.com/api/videos"
        );

        if (!response.ok) {
          throw new Error(`API error: ${response.status}`);
        }

        const data = await response.json();

        if (data?.data && Array.isArray(data.data)) {
          setVideos(data.data);
        } else {
          throw new Error("Unexpected API response format");
        }
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };

    getVideos();
  }, []);

  // Loading state
  if (loading) {
    return (
      <View className="flex-1 justify-center items-center p-4">
        <Text className="text-2xl text-center font-bold text-[#0f172a] dark:text-white mb-4">
          আমার ইউটিউব চ্যানেল
        </Text>
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

  // Error state
  if (error) {
    return (
      <View className="flex-1 justify-center items-center p-4">
        <Text className="text-2xl text-center font-bold text-[#0f172a] dark:text-white mb-4">
          আমার ইউটিউব চ্যানেল
        </Text>
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
        <Text className="text-lg text-red-500 dark:text-red-400">
          ভিডিও লোড করতে সমস্যা হয়েছে: {error}
        </Text>
      </View>
    );
  }

  // No videos state
  if (videos.length === 0) {
    return (
      <View className="flex-1 justify-center items-center p-4">
        <Text className="text-2xl text-center font-bold text-[#0f172a] dark:text-white mb-4">
          আমার ইউটিউব চ্যানেল
        </Text>
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

  // Render video list
  return (
    <ScrollView className="mt-10 p-4">
      <Text className="text-2xl text-center font-bold text-[#0f172a] dark:text-white mb-4">
        আমার ইউটিউব চ্যানেল
      </Text>
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
    </ScrollView>
  );
};

export default YouTubeSection;
