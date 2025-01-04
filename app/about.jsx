import { View, Text, ScrollView } from "react-native";
import React from "react";
import HomeScreenPorile from "@/components/home/profile";

const AboutScreen = () => {
  return (
    <ScrollView className="flex-1 bg-[#C5DEFE] dark:bg-[#0f172a] px-6 py-10">
      <HomeScreenPorile />

      {/* About Me Section */}
      <View className="my-8">
        <Text className="text-2xl font-bold text-[#0f172a] dark:text-[#C5DEFE] mb-4">
          ব্যক্তিগত পরিচিতি
        </Text>
        <Text className="text-lg text-[#1e293b] dark:text-[#94a3b8] leading-7">
          আমি রাশেদ আব্দুল্লাহ, একজন শিক্ষক ও ডেভেলপার। শিক্ষকতায় আছি জামিয়াতুল
          লতিফ রূপগঞ্জ মাদ্রাসায়। আমি শিক্ষার মাধ্যমে মানুষের জীবনকে সহজ ও
          সুন্দর করতে ভালোবাসি। প্রযুক্তি এবং প্রোগ্রামিংয়ের প্রতি আমার গভীর
          আগ্রহ আমাকে ওয়েব ডেভেলপমেন্টে নিয়ে আসে।
        </Text>
      </View>

      {/* Education Section */}
      <View className="mb-8">
        <Text className="text-2xl font-bold text-[#0f172a] dark:text-[#C5DEFE] mb-4">
          শিক্ষাগত যোগ্যতা
        </Text>
        <Text className="text-lg text-[#1e293b] dark:text-[#94a3b8] leading-7">
          📚 দাওরায়ে হাদিস - জামিয়া শারইয়্যাহ মালিবাগ, ঢাকা।{"\n"}
          🎓 ডেভেলপমেন্ট সার্টিফিকেট - Learn with Sumit{"\n"}
          📜 রিঅ্যাক্ট জেএস ও নেক্সট জেএস অ্যাক্সিলারেটর কোর্স সম্পন্ন করেছি।
        </Text>
      </View>

      {/* Learning Section */}
      <View className="mb-8">
        <Text className="text-2xl font-bold text-[#0f172a] dark:text-[#C5DEFE] mb-4">
          অভিজ্ঞতা
        </Text>
        <Text className="text-lg text-[#1e293b] dark:text-[#94a3b8] leading-7">
          আমি প্রতিনিয়ত নতুন কিছু শিখতে পছন্দ করি। আমার শেখার জার্নিতে আমি
          নিম্নলিখিত স্কিলগুলো অর্জন করেছি:{"\n"}
          🌐 রিঅ্যাক্ট জেএস এবং নেক্সট জেএস।{"\n"}
          🖌️ ফিগমা থেকে পিক্সেল পারফেক্ট HTML এবং CSS।{"\n"}⚡ টেইলউইন্ড CSS এবং
          রেসপন্সিভ ডিজাইন।{"\n"}
          🌱 মঙ্গোডিবি এবং সার্ভার সাইড কম্পোনেন্ট।
        </Text>
      </View>

      {/* Profession Section */}
      <View className="mb-8">
        <Text className="text-2xl font-bold text-[#0f172a] dark:text-[#C5DEFE] mb-4">
          পেশাগত অভিজ্ঞতা
        </Text>
        <Text className="text-lg text-[#1e293b] dark:text-[#94a3b8] leading-7">
          আমি একজন দক্ষ ডেভেলপার এবং শিক্ষক। আমার পেশাগত কাজের মধ্যে রয়েছে:
          {"\n"}✅ জামিয়া লতিফ মাদ্রাসার জন্য ডাটাবেজ ব্যবস্থাপনা এবং ওয়েবসাইট
          তৈরি।{"\n"}✅ আরবি ভাষা শিক্ষার জন্য অনলাইন প্ল্যাটফর্ম তৈরি।{"\n"}✅
          কুরআন ও বাংলা অনুবাদ রিডিং অ্যাপ তৈরি।{"\n"}✅ ইউটিউব চ্যানেল 'আহলাম'
          পরিচালনা, যেখানে ইসলামিক নাশিদ এবং কুরআনের ভিডিও আপলোড করি।
        </Text>
      </View>

      {/* Final Thoughts */}
      <View className="mb-8">
        <Text className="text-2xl font-bold text-[#0f172a] dark:text-[#C5DEFE] mb-4">
          আমার লক্ষ্য
        </Text>
        <Text className="text-lg text-[#1e293b] dark:text-[#94a3b8] leading-7">
          আমি প্রযুক্তি এবং শিক্ষার সমন্বয়ে মুসলিম কমিউনিটির জন্য আরও সহজলভ্য
          এবং কার্যকর সেবা প্রদানের লক্ষ্যে কাজ করছি। আমার লক্ষ্য হলো নতুন
          প্রজন্মের জন্য প্রযুক্তি-নির্ভর শিক্ষার মাধ্যমে সুন্দর একটি ভবিষ্যত
          তৈরি করা।
        </Text>
      </View>
    </ScrollView>
  );
};

export default AboutScreen;
