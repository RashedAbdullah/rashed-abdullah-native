import React, { useState, useEffect } from "react";
import {
  View,
  Text,
  ScrollView,
  TouchableOpacity,
  ActivityIndicator,
} from "react-native";
import RenderHTML from "react-native-render-html";
import { useWindowDimensions } from "react-native";
import { getEngToBn } from "../utils/get-eng-to-bn";

const categories = ["2025", "2024", "2023", "2022", "2021", "2020", "2019"]; // Available years

const DiaryScreen = () => {
  const [selectedCategory, setSelectedCategory] = useState("2025"); // Default year is 2025
  const [diaries, setDiaries] = useState([]);
  const [loading, setLoading] = useState(true);
  const { width } = useWindowDimensions();

  useEffect(() => {
    const fetchDiaries = async () => {
      setLoading(true);
      try {
        const response = await fetch(
          `https://www.rashedabdullah.com/api/diraies?year=${selectedCategory}`
        );
        const data = await response.json();
        if (data.success) {
          setDiaries(data.data);
        } else {
          setDiaries([]);
        }
      } catch (error) {
        console.error("Error fetching diaries:", error);
        setDiaries([]);
      } finally {
        setLoading(false);
      }
    };

    fetchDiaries();
  }, [selectedCategory]);

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
                {getEngToBn(category)} ইং
              </Text>
            </TouchableOpacity>
          ))}
        </ScrollView>
      </View>

      {/* Diary Entries */}
      <ScrollView className="px-4 mt-4">
        {loading ? (
          <ActivityIndicator size="large" color="#0f172a" />
        ) : diaries.length > 0 ? (
          diaries.map((diary) => (
            <View
              key={diary._id}
              className="mb-6 p-4 bg-[#1e293b] rounded-xl shadow-lg"
            >
              {/* Date */}
              <Text className="text-lg font-bold dark:text-gray-400 text-center text-white">
                {new Date(diary.date).toLocaleDateString("bn-BD", {
                  year: "numeric",
                  month: "long",
                  day: "numeric",
                })}{" "}
                ইং
              </Text>

              {/* Content */}
              <RenderHTML
                contentWidth={width}
                source={{ html: diary.text }}
                baseStyle={{
                  fontSize: 16,
                  color: "#fff",
                  lineHeight: 24,
                }}
                tagsStyles={{
                  em: { fontStyle: "italic" },
                  strong: { fontWeight: "bold" },
                  li: { marginBottom: 8 },
                }}
              />
            </View>
          ))
        ) : (
          <View className="flex-1 items-center justify-center">
            <Text className="text-lg font-semibold text-gray-500 dark:text-gray-400">
              এই বছরের জন্য কোন দিনলিপি পাওয়া যায়নি।
            </Text>
          </View>
        )}
      </ScrollView>
    </View>
  );
};

export default DiaryScreen;
