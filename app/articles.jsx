import React, { useEffect, useState } from "react";
import {
  View,
  Text,
  ScrollView,
  TouchableOpacity,
  Image,
  ActivityIndicator,
} from "react-native";

const ArticlesScreen = () => {
  const [articles, setArticles] = useState([]);
  const [loading, setLoading] = useState(true);

  // Fetch articles from API
  useEffect(() => {
    const fetchArticles = async () => {
      try {
        const response = await fetch(
          "https://www.rashedabdullah.com/api/articles"
        );
        const data = await response.json();
        if (data.success) {
          setArticles(data.data);
        }
      } catch (error) {
        console.error("Error fetching articles:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchArticles();
  }, []);

  if (loading) {
    return (
      <View className="flex-1 justify-center items-center bg-[#C5DEFE] dark:bg-[#0f172a]">
        <ActivityIndicator size="large" color="#0f172a" />
        <Text className="mt-4 text-[#0f172a] dark:text-[#C5DEFE] text-lg">
          লোড হচ্ছে...
        </Text>
      </View>
    );
  }

  return (
    <View className="flex-1 bg-[#C5DEFE] dark:bg-[#0f172a]">
      {/* Articles List */}
      <ScrollView className="px-4 mt-4">
        {articles.length > 0 ? (
          articles.map((article) => (
            <View
              key={article._id}
              className="mb-6 bg-white dark:bg-[#1e293b] rounded-xl shadow-lg"
            >
              {/* Article Image */}
              {article.thumbnail && (
                <Image
                  source={{ uri: article.thumbnail }}
                  className="w-full h-48 rounded-t-xl"
                  resizeMode="cover"
                />
              )}

              {/* Article Content */}
              <View className="p-4">
                {/* Title */}
                <Text className="text-lg font-semibold text-[#0f172a] dark:text-[#C5DEFE]">
                  {article.title}
                </Text>

                {/* Author */}
                <Text className="text-sm text-gray-600 dark:text-gray-400 mt-1">
                  লেখক: {article.author || "অজানা"}
                </Text>

                {/* Date */}
                <Text className="text-sm text-gray-500 dark:text-gray-400 mt-1">
                  {new Date(article.createdAt).toLocaleDateString("bn-BD", {
                    year: "numeric",
                    month: "long",
                    day: "numeric",
                  })}
                </Text>

                {/* Content Preview */}
                <Text
                  className="text-md text-[#334155] dark:text-[#94a3b8] mt-2 leading-6"
                  numberOfLines={3}
                >
                  {article.description}
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
