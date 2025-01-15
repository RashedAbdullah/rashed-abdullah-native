import { View, Text, TouchableOpacity } from "react-native";
import React, { useEffect, useState } from "react";
import { Link } from "expo-router";

const ArticleSection = () => {
  const [articles, setArticles] = useState([]);
  const [loading, setLoading] = useState(true);

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

  return (
    <View className="mt-8">
      <View className="flex-row justify-between items-center align-middle px-4">
        <Text className="text-2xl font-bold text-[#0f172a] dark:text-[#C5DEFE]">
          প্রবন্ধ
        </Text>

        <Link href="/articles">
          <Text className="font-bold text-[#0f172a] dark:text-[#C5DEFE] truncate">
            আরও পড়ুন →
          </Text>
        </Link>
      </View>

      <View className="mt-4">
        {loading ? (
          <Text className="text-center text-[#475569] dark:text-[#94a3b8]">
            লোড হচ্ছে...
          </Text>
        ) : articles.length > 0 ? (
          articles.slice(0, 2).map((article) => (
            <TouchableOpacity
              key={article._id}
              className="p-4 bg-white dark:bg-[#1e293b] rounded-lg shadow mb-4"
            >
              <Text className="text-lg font-semibold text-[#0f172a] dark:text-[#C5DEFE]">
                {article.title}
              </Text>
              <Text className="text-md text-[#475569] dark:text-[#94a3b8] mt-1">
                {article.description}
              </Text>
              <Text className="text-sm text-[#475569] dark:text-[#94a3b8] mt-2">
                প্রকাশিত:{" "}
                {new Date(article.createdAt).toLocaleDateString("bn-BD", {
                  year: "numeric",
                  month: "long",
                  day: "numeric",
                })}
              </Text>
            </TouchableOpacity>
          ))
        ) : (
          <Text className="text-center text-[#475569] dark:text-[#94a3b8]">
            কোন প্রবন্ধ পাওয়া যায়নি।
          </Text>
        )}
      </View>
    </View>
  );
};

export default ArticleSection;
