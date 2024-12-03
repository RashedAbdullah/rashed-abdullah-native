import { View, Text, Image, TouchableOpacity, ScrollView } from 'react-native';
import React from 'react';

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

      {/* About Section */}
      <View className="mb-6">
        <Text className="text-xl font-semibold text-[#0f172a] dark:text-white mb-2">
          About Me
        </Text>
        <Text className="text-gray-700 dark:text-gray-300">
          Passionate Front-End Developer specializing in React.js and Next.js. Crafting user-friendly, responsive designs with a focus on quality and functionality.
        </Text>
      </View>

      {/* Portfolio Section */}
      <View className="mb-6">
        <Text className="text-xl font-semibold text-[#0f172a] dark:text-white mb-2">
          Portfolio
        </Text>
        <TouchableOpacity className="bg-[#0f172a] dark:bg-[#C5DEFE] py-3 px-6 rounded-lg">
          <Text className="text-white dark:text-[#0f172a] text-center font-bold">
            View My Work
          </Text>
        </TouchableOpacity>
      </View>

      {/* Contact Section */}
      <View className="mt-auto">
        <Text className="text-center text-gray-700 dark:text-gray-300 mb-4">
          Let's Connect!
        </Text>
        <View className="flex-row justify-center space-x-4">
          <TouchableOpacity>
            <Text className="text-blue-500 font-bold">GitHub</Text>
          </TouchableOpacity>
          <TouchableOpacity>
            <Text className="text-blue-500 font-bold">LinkedIn</Text>
          </TouchableOpacity>
          <TouchableOpacity>
            <Text className="text-blue-500 font-bold">YouTube</Text>
          </TouchableOpacity>
        </View>
      </View>
    </ScrollView>
  );
};

export default HomeScreen;
