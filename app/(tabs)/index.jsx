import { ScrollView, View, Text, TouchableOpacity } from "react-native";
import HomeScreenPorile from "@/components/home/profile";
import DiraySection from "@/components/home/diray";
import ArticleSection from "@/components/home/article";
import YoutubeSection from "@/components/home/youtube";
import LearningResources from "@/components/home/learning";

const HomeScreen = () => {
  return (
    <ScrollView className="bg-[#F4F4F9] dark:bg-[#1A202C] px-6">
      <View className="h-10"></View>
      <HomeScreenPorile />
      <ArticleSection />
      <DiraySection />
      <LearningResources />
      <YoutubeSection />

      {/* Footer */}
      <View className="py-4 mt-12">
        <View className="items-center">
          <Text className="text-xl font-semibold text-[#0f172a] dark:text-[#C5DEFE] mb-2">
            রাশেদ আব্দুল্লাহ
          </Text>
          <Text className="text-sm text-[#4A5568] dark:text-[#A0AEC0]">
            © {new Date().getFullYear("bn")} All Rights Reserved
          </Text>
          <View className="flex-row justify-center mt-2">
            <TouchableOpacity
              onPress={() => console.log("Terms and Conditions clicked")}
              className="mr-6"
            >
              <Text className="text-sm text-[#0f172a] dark:text-[#C5DEFE] hover:underline">
                Terms & Conditions
              </Text>
            </TouchableOpacity>
            <TouchableOpacity
              onPress={() => console.log("Privacy Policy clicked")}
            >
              <Text className="text-sm text-[#0f172a] dark:text-[#C5DEFE] hover:underline">
                Privacy Policy
              </Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    </ScrollView>
  );
};

export default HomeScreen;
