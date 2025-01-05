import React from "react";
import { View, Text, ScrollView } from "react-native";
import { Link } from "expo-router"; // Import Link for navigation

const MenuScreen = () => {
  // Define menu items
  const menuItems = [
    { title: "হোম", screen: "/" },
    { title: "প্রবন্ধ", screen: "/articles" },
    { title: "দিনলিপি", screen: "/diray" },
    { title: "ইউটিউব চ্যানেল", screen: "/youtube" },
    { title: "পাঠ উপকরণ", screen: "LearningResourcesScreen" },
    { title: "আমার সম্পর্কে", screen: "/about" },
  ];

  return (
    <ScrollView className="flex-1 bg-[#C5DEFE] dark:bg-[#0f172a] py-40 px-10">
      <View>
        <Text className="text-3xl font-bold text-center text-[#0f172a] dark:text-[#C5DEFE] mb-6">
          মেনুবার
        </Text>
        <View className="space-y-4">
          {menuItems.map((item, index) => (
            <Link
              key={index}
              href={item.screen}
              className="p-4 bg-white dark:bg-[#1e293b] rounded-lg shadow-md mt-5"
            >
              <Text className="text-[#0f172a] dark:text-[#C5DEFE] text-xl font-semibold">
                {item.title}
              </Text>
            </Link>
          ))}
        </View>
      </View>
    </ScrollView>
  );
};

export default MenuScreen;
