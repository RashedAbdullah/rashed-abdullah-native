import { Link } from "expo-router";
import { View, Text, TouchableOpacity } from "react-native";

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
        {[
          {
            title: "রিয়াক্ট জেএস কোর্স",
            description: "রিয়াক্ট জেএস এর বেসিক থেকে অ্যাডভান্স লেভেল শেখা।",
          },
          {
            title: "নেক্সট জেএস টিউটোরিয়াল",
            description: "নেক্সট জেএস ব্যবহার করে প্রজেক্ট তৈরি।",
          },
          {
            title: "জাভাস্ক্রিপ্ট ফান্ডামেন্টাল",
            description: "জাভাস্ক্রিপ্ট প্রোগ্রামিং এর বেসিক কনসেপ্ট।",
          },
          {
            title: "টাইপস্ক্রিপ্ট গাইড",
            description: "টাইপস্ক্রিপ্টের বেসিক এবং অ্যাডভান্স টপিক।",
          },
        ].map((resource, index) => (
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
