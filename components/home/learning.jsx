import { Link } from "expo-router";
import { View, Text, TouchableOpacity } from "react-native";
import { learningResources } from "../../data/learing-resources";
const LearningResources = () => {
  return (
    <View className="mt-10">
      <View className="flex-row justify-between items-center px-4 mb-4">
        <Text className="text-2xl font-bold text-[#0f172a] dark:text-[#C5DEFE]">
          পাঠ উপকরণ
        </Text>
        <Link href="/resources">
          <Text className="font-bold text-[#0f172a] dark:text-[#C5DEFE] truncate">
            আরও দেখুন →
          </Text>
        </Link>
      </View>
      <View>
        {/* Example Resource Cards */}
        {learningResources.map((resource, index) => (
          <TouchableOpacity
            key={index}
            className="mb-4 p-4 bg-white dark:bg-[#1e293b] rounded-lg shadow-md"
          >
            <Text className="text-lg font-semibold text-[#0f172a] dark:text-[#C5DEFE]">
              {resource.title}
            </Text>
            <Text className="text-sm text-[#475569] dark:text-[#94a3b8] mt-1">
              {resource.description}
            </Text>
          </TouchableOpacity>
        ))}
      </View>
    </View>
  );
};

export default LearningResources;
