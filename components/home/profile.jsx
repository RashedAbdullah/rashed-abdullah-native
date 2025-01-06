import { View, Text, TouchableOpacity, Linking } from "react-native";
import React from "react";
import { Image } from "react-native";
import { FontAwesome } from "@expo/vector-icons";

const HomeScreenProfile = () => {
  return (
    <>
      {/* Profile Section */}
      <View className="items-center my-10">
        <Image
          source={require("@/assets/images/logo.png")}
          className="w-32 h-32 rounded-full border-2 border-[#0f172a] dark:border-white"
        />
      </View>
      <View className="mb-6">
        <Text className="text-3xl font-bold text-[#0f172a] dark:text-white text-center">
          রাশেদ আব্দুল্লাহ
        </Text>
        <Text className="text-gray-700 dark:text-gray-300 mt-1 text-center">
          শিক্ষক ও ডেভেলপার
        </Text>
      </View>

      {/* Social Media Section */}
      <View
        style={{
          flexDirection: "row",
          justifyContent: "center",
        }}
      >
        {/* Facebook */}
        <TouchableOpacity
          style={{
            alignItems: "center",
            justifyContent: "center",
            width: 40,
            height: 40,
            backgroundColor: "#4267B2",
            borderRadius: 25,
            marginHorizontal: 10,
          }}
          onPress={() =>
            Linking.openURL("https://www.facebook.com/Rashed4Abdullah")
          }
        >
          <FontAwesome name="facebook" size={24} color="#fff" />
        </TouchableOpacity>

        {/* YouTube */}
        <TouchableOpacity
          style={{
            alignItems: "center",
            justifyContent: "center",
            width: 40,
            height: 40,
            backgroundColor: "#FF0000",
            borderRadius: 25,
            marginHorizontal: 10,
          }}
          onPress={() =>
            Linking.openURL("https://www.youtube.com/@RashedAbdullahBD")
          }
        >
          <FontAwesome name="youtube" size={24} color="#fff" />
        </TouchableOpacity>

        {/* LinkedIn */}
        <TouchableOpacity
          style={{
            alignItems: "center",
            justifyContent: "center",
            width: 40,
            height: 40,
            backgroundColor: "#0077B5",
            borderRadius: 25,
            marginHorizontal: 10,
          }}
          onPress={() =>
            Linking.openURL("https://www.linkedin.com/in/rashed4abdullah/")
          }
        >
          <FontAwesome name="linkedin" size={24} color="#fff" />
        </TouchableOpacity>

        {/* GitHub */}
        <TouchableOpacity
          style={{
            alignItems: "center",
            justifyContent: "center",
            width: 40,
            height: 40,
            backgroundColor: "#333",
            borderRadius: 25,
            marginHorizontal: 10,
          }}
          onPress={() => Linking.openURL("https://github.com/RashedAbdullah")}
        >
          <FontAwesome name="github" size={24} color="#fff" />
        </TouchableOpacity>
      </View>
    </>
  );
};

export default HomeScreenProfile;
