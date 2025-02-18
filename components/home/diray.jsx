import { Link } from "expo-router";
import React from "react";
import { Text, View } from "react-native";
import { TouchableOpacity } from "react-native";

const DiarySection = () => {
  return (
    <View className="mt-8">
      <View className="flex-row justify-between items-center px-4">
        <Text className="text-2xl font-bold text-[#0f172a] dark:text-[#C5DEFE]">
          দিনলিপি
        </Text>
        <Link href="/diray">
          <Text className="font-bold text-[#0f172a] dark:text-[#C5DEFE] truncate">
            আরও পড়ুন →
          </Text>
        </Link>
      </View>
      <View className="mt-4">
        <TouchableOpacity className="p-4 bg-white dark:bg-[#1e293b] rounded-lg shadow">
          <Text className="text-lg font-semibold text-[#0f172a] dark:text-[#C5DEFE]">
            {new Date().toLocaleDateString("bn-bd", {
              day: "2-digit",
              month: "long",
              year: "numeric",
            })}{" "}
            ইং
          </Text>
          <Text className="text-md text-[#475569] dark:text-[#94a3b8] mt-1">
            আজকের দিন শুরু করলাম নতুন প্রোজেক্ট নিয়ে কাজ করে। সকালের নাশতার পর
            কিছু সময় বিশ্রাম নিয়ে কাজ শুরু করলাম।
          </Text>
          <Text className="text-sm font-semibold text-[#0f172a] dark:text-[#C5DEFE]">
            আরও পড়ুন →
          </Text>
        </TouchableOpacity>
        <TouchableOpacity className="p-4 bg-white dark:bg-[#1e293b] rounded-lg shadow mt-4">
          <Text className="text-lg font-semibold text-[#0f172a] dark:text-[#C5DEFE]">
            {new Date().toLocaleDateString("bn-bd", {
              day: "2-digit",
              month: "long",
              year: "numeric",
            })}{" "}
            ইং
          </Text>
          <Text className="text-md text-[#475569] dark:text-[#94a3b8] mt-1">
            গতকাল সন্ধ্যায় পরিবারের সাথে সময় কাটালাম। এরপর রাতের খাবারের পর
            কিছুক্ষণ বই পড়লাম।
          </Text>
          <Text className="text-sm font-semibold text-[#0f172a] dark:text-[#C5DEFE]">
            আরও পড়ুন →
          </Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default DiarySection;
