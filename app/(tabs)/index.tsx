import { Link } from "expo-router";
import { styled } from "nativewind";
import { Pressable, Text } from "react-native";
import { SafeAreaView as RNSafeAreaView } from "react-native-safe-area-context";

const SafeAreaView = styled(RNSafeAreaView);

export default function Home() {
  return (
    <SafeAreaView className="flex-1 items-center justify-center bg-background p-5">
      <Text className="text-5xl font-sans-extrabold">Home</Text>
      {/* <Link href="/onboarding" className="mt-4 rounded bg-primary p-4 text-white">
        Go to Onboarding
      </Link> */}
      <Link href="/onboarding" asChild>
        <Pressable className="mt-4 rounded bg-primary p-4">
          <Text className="text-white font-sans-bold">
            Go to Onboarding
          </Text>
        </Pressable>
      </Link>
      <Link href="/(auth)/sign-in" className="mt-4 rounded bg-primary p-4 text-white font-sans-bold">
        Go to Sign In
      </Link>
      <Link href="/(auth)/sign-up" className="mt-4 rounded bg-primary p-4 text-white font-sans-bold">
        Go to Sign Up
      </Link>
    </SafeAreaView>
  );
}