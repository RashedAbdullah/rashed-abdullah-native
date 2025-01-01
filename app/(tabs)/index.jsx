import { View, Text, Image, TouchableOpacity, ScrollView } from "react-native";

const HomeScreen = () => {
  return (
    <ScrollView className="min-h-screen bg-[#C5DEFE] dark:bg-[#0f172a] px-6 py-10">
      {/* Profile Picture */}
      <View className="items-center my-10">
        <Image
          source={require("@/assets/images/logo.png")}
          className="w-32 h-32 rounded-full border-2 border-[#0f172a] dark:border-white"
        />
      </View>

      {/* Header Section */}
      <View className="mb-6">
        <Text className="text-3xl font-bold text-[#0f172a] dark:text-white text-center">
          Rashed Abdullah
        </Text>
        <Text className="text-gray-700 dark:text-gray-300 mt-1 text-center">
          Front-End Developer
        </Text>
      </View>
    </ScrollView>
  );
};

export default HomeScreen;
