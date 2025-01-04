import { ScrollView, View } from "react-native";
import HomeScreenPorile from "@/components/home/profile";
import DiraySection from "@/components/home/diray";
import ArticleSection from "@/components/home/article";
import YoutubeSection from "@/components/home/youtube";
import LearningResources from "@/components/home/learning";

const HomeScreen = () => {
  return (
    <ScrollView className="bg-[#C5DEFE] dark:bg-[#0f172a] px-6">
      <View className="h-10"></View>
      <HomeScreenPorile />
      <ArticleSection />
      <DiraySection />
      <LearningResources />
      <YoutubeSection />
    </ScrollView>
  );
};

export default HomeScreen;
