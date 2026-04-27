import "@/global.css";
// import { ClerkProvider, useAuth } from "@clerk/expo";
// import { tokenCache } from "@clerk/expo/token-cache";
import { useFonts } from "expo-font";
import { SplashScreen, Stack, useGlobalSearchParams, usePathname } from "expo-router";
import { useEffect, useRef } from "react";

SplashScreen.preventAutoHideAsync();

// const pubKey = process.env.EXPO_PUBLIC_CLERK_PUBLISHABLE_KEY!;

// if (!pubKey) {
//   throw new Error("Missing Clerk publishable key. Please add it to your environment variables.");
// }

function RootLayoutContent() {

  // const { isLoaded: authLoaded } = useAuth();
  const pathname = usePathname();
  const params = useGlobalSearchParams();
  const previousPathname = useRef<string | undefined>(undefined);

  useEffect(() => {
    if (previousPathname.current !== pathname) {
      previousPathname.current = pathname;
    }
  }, [pathname, params]);

  const [fontsLoaded] = useFonts({
    "sans-bold": require("../assets/fonts/PlusJakartaSans-Bold.ttf"),
    "sans-extrabold": require("../assets/fonts/PlusJakartaSans-ExtraBold.ttf"),
    "sans-light": require("../assets/fonts/PlusJakartaSans-Light.ttf"),
    "sans-medium": require("../assets/fonts/PlusJakartaSans-Medium.ttf"),
    "sans-regular": require("../assets/fonts/PlusJakartaSans-Regular.ttf"),
    "sans-semibold": require("../assets/fonts/PlusJakartaSans-SemiBold.ttf")
  })

  useEffect(() => {
    // if (fontsLoaded && authLoaded) {
    if (fontsLoaded) {
      SplashScreen.hideAsync();
    }
  }, [fontsLoaded]);
  // }, [fontsLoaded, authLoaded]);

  // if (!fontsLoaded || !authLoaded) {
  if (!fontsLoaded) {
    return null;
  }

  return (
    <Stack screenOptions={{ headerShown: false }} />
  )
}

export default function RootLayout() {
  return (
    <RootLayoutContent />
    // <ClerkProvider publishableKey={pubKey} tokenCache={tokenCache}></ClerkProvider>
  );
}
