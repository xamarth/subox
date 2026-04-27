import { tabs } from "@/constants/data";
import { colors, components } from "@/constants/theme";
import "@/global.css";
import { isLoaded } from "expo-font";
// import { useAuth } from "@clerk/expo";
import {
  // Redirect,
  Tabs,
} from "expo-router";
import { Image, View } from "react-native";
import { useSafeAreaInsets } from "react-native-safe-area-context";

const tabBar = components.tabBar;

export default function TabLayout() {

  // const { isSignedIn, isLoaded } = useAuth();

  const insets = useSafeAreaInsets();

  if (!isLoaded) {
    return null
  };

  // if (!isSignedIn) {
  //   return (
  //     <Redirect href="/(auth)/sign-in" />
  //   )
  // }

  const TabIcon = ({ focused, icon }: TabIconProps) => (
    <View className="tabs-icon">
      {/* <View className={clsx('tabs-pill', { 'tabs-active': focused })}> */}
      <View className={`tabs-pill ${focused ? 'tabs-active' : ''}`}>
        <Image source={icon} resizeMode="contain" className="tabs-glyph" />
      </View>
    </View>
  )

  return (
    <Tabs screenOptions={{
      headerShown: false,
      tabBarShowLabel: false,
      tabBarStyle: {
        position: "absolute",
        bottom: Math.max(insets.bottom, tabBar.horizontalInset),
        height: tabBar.height,
        marginHorizontal: tabBar.horizontalInset,
        borderRadius: tabBar.radius,
        backgroundColor: colors.primary,
        borderTopWidth: 0,
        elevation: 0,
      },
      tabBarItemStyle: {
        paddingVertical: ((tabBar.height / 2) - (tabBar.iconFrame / 1.6)),
      },
      tabBarIconStyle: {
        width: tabBar.iconFrame,
        height: tabBar.iconFrame,
        alignItems: "center",
      }
    }}>
      {tabs.map((tab) => (
        <Tabs.Screen
          key={tab.name}
          name={tab.name}
          options={{
            title: tab.title,
            tabBarIcon: ({ focused }) => (
              <TabIcon focused={focused} icon={tab.icon} />
            )
          }}
        />
      ))}
    </Tabs>
  );
}
