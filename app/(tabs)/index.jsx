import { View, Text, Image, TouchableOpacity, ScrollView } from "react-native";
import HomeScreenPorile from "@/components/home/profile";
import DiraySection from "@/components/home/article";
import ArticleSection from "@/components/home/article";

const HomeScreen = () => {
  return (
    <ScrollView className="min-h-screen bg-[#C5DEFE] dark:bg-[#0f172a] px-6 py-10">
      <HomeScreenPorile />
      <ArticleSection />
      <DiraySection />
    </ScrollView>
  );
};

export default HomeScreen;
