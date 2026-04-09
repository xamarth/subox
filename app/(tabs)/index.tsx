import { Link } from "expo-router";
import { Pressable, Text, View } from "react-native";

export default function Home() {
  return (
    <View className="flex-1 items-center justify-center bg-background">
      <Text className="text-xl font-bold text-success">
        Welcome to Nativewind!
      </Text>
      {/* <Link href="/onboarding" className="mt-4 rounded bg-primary p-4 text-white">
        Go to Onboarding
      </Link> */}
      <Link href="/onboarding" asChild>
        <Pressable className="mt-4 rounded bg-primary p-4">
          <Text className="text-white">
            Go to Onboarding
          </Text>
        </Pressable>
      </Link>
      <Link href="/(auth)/sign-in" className="mt-4 rounded bg-primary p-4 text-white">
        Go to Sign In
      </Link>
      <Link href="/(auth)/sign-up" className="mt-4 rounded bg-primary p-4 text-white">
        Go to Sign Up
      </Link>

      <Link href="/subscriptions/spotify">Spotify Subscription</Link>
      <Link
        href={{
          pathname: "/subscriptions/[id]",
          params: { id: "claude" },
        }}
      >
        Claude Max Subscription
      </Link>
      <Link href="/">Home</Link>
    </View>
  );
}