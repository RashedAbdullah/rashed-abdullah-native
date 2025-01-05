import { DarkTheme, DefaultTheme, ThemeProvider } from "@react-navigation/native";
import { useFonts } from "expo-font";
import { Stack } from "expo-router";
import * as SplashScreen from "expo-splash-screen";
import { StatusBar } from "expo-status-bar";
import { useEffect, useCallback } from "react";
import "react-native-reanimated";
import "../global.css";

import { useColorScheme } from "@/hooks/useColorScheme";
import { Text, View } from "react-native";

// Prevent the splash screen from auto-hiding before asset loading is complete.
SplashScreen.preventAutoHideAsync();

export default function RootLayout() {
  const colorScheme = useColorScheme();

  // Load custom fonts
  const [fontsLoaded] = useFonts({
    SpaceMono: require("../assets/fonts/SutonnyOMJ.ttf"),
  });

  // Handle SplashScreen visibility
  useEffect(() => {
    if (fontsLoaded) {
      SplashScreen.hideAsync();
    }
  }, [fontsLoaded]);

  // Fallback screen if fonts are not loaded
  const renderLoadingScreen = useCallback(() => {
    return (
      <ThemeProvider value={colorScheme === "dark" ? DarkTheme : DefaultTheme}>
        <View
          style={{
            flex: 1,
            justifyContent: "center",
            alignItems: "center",
            backgroundColor: colorScheme === "dark" ? "#0f172a" : "#C5DEFE",
          }}
        >
          <Text
            style={{
              fontSize: 18,
              color: colorScheme === "dark" ? "#C5DEFE" : "#0f172a",
              fontFamily: "SpaceMono",
            }}
          >
            অ্যাপ লোড হচ্ছে...
          </Text>
        </View>
        <StatusBar style={colorScheme === "dark" ? "light" : "dark"} />
      </ThemeProvider>
    );
  }, [colorScheme]);

  // Header styling function
  const getHeaderStyle = () => ({
    headerStyle: {
      backgroundColor: colorScheme === "dark" ? "#0f172a" : "#C5DEFE",
      shadowOpacity: 0,
    },
    headerTintColor: colorScheme === "dark" ? "#C5DEFE" : "#0f172a", // Text color
    headerTitleStyle: {
      fontFamily: "SpaceMono",
      fontSize: 20,
    },
  });

  // Return the layout
  if (!fontsLoaded) {
    return renderLoadingScreen();
  }

  return (
    <ThemeProvider value={colorScheme === "dark" ? DarkTheme : DefaultTheme}>
      <Stack>
        {/* Main Screens with improved headers */}
        <Stack.Screen name="(tabs)" options={{ headerShown: false }} />
        <Stack.Screen
          name="+not-found"
          options={{
            title: "নট ফাউন্ড",
            ...getHeaderStyle(),
          }}
        />
         <Stack.Screen
          name="youtube"
          options={{
            title: "ইউটিউব",
            ...getHeaderStyle(),
          }}
        />
        <Stack.Screen
          name="about"
          options={{
            title: "আমার সম্পর্কে",
            ...getHeaderStyle(),
          }}
        />
        <Stack.Screen
          name="diray"
          options={{
            title: "দিনলিপি",
            ...getHeaderStyle(),
          }}
        />
         <Stack.Screen
          name="articles"
          options={{
            title: "প্রবন্ধ",
            ...getHeaderStyle(),
          }}
        />
      </Stack>

      <StatusBar style={colorScheme === "dark" ? "light" : "dark"} />
    </ThemeProvider>
  );
}
