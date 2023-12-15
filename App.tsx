import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { NavigationContainer } from "@react-navigation/native";
import React, { useEffect } from "react";
import Home from "./screens/Home/Home";
import TabBarIcon from "./components/TabBarIcon/TabBarIcon";
import { useFonts } from "expo-font";
import * as SplashScreen from "expo-splash-screen";
import { FontAwesome } from "@expo/vector-icons";
import { StatusBar } from "react-native";
import TopPicks from "./screens/TopPicks/TopPicks";
import Messages from "./screens/Messages/Messages";
import Profile from "./screens/Profile/Profile";
import { SafeAreaView } from "react-native-safe-area-context";

SplashScreen.preventAutoHideAsync();

const Tab = createBottomTabNavigator();

const App = () => {
  //Async load the icons
  const [fontsLoaded, fontError] = useFonts({
    ...FontAwesome.font,
  });

  useEffect(() => {
    if (fontsLoaded || fontError) {
      SplashScreen.hideAsync();

      if (fontError) {
        console.error(
          `An error occurred fetching the font: ${fontError.message}`
        );
      }
    }
  }, [fontsLoaded, fontError]);

  if (!fontsLoaded && !fontError) {
    return null;
  }

  return (
    <>
      <NavigationContainer>
        <Tab.Navigator
          screenOptions={({ route }) => ({
            tabBarIcon: ({ focused }) => {
              let iconName: keyof typeof FontAwesome.glyphMap;

              switch (route.name) {
                case "Home":
                  iconName = "fire";
                  break;
                case "Top Picks":
                  iconName = "diamond";
                  break;
                case "Messages":
                  iconName = "commenting-o";
                  break;
                case "Profile":
                  iconName = "user";
                  break;
              }

              return (
                <TabBarIcon
                  focused={focused}
                  iconName={iconName}
                  Icon={FontAwesome}
                />
              );
            },
            headerShown: false,
          })}
        >
          <Tab.Screen name="Home" component={Home} />
          <Tab.Screen name="Top Picks" component={TopPicks} />
          <Tab.Screen name="Messages" component={Messages} />
          <Tab.Screen name="Profile" component={Profile} />
        </Tab.Navigator>
      </NavigationContainer>
    </>
  );
};

export default App;
