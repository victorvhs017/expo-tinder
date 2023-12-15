import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { NavigationContainer } from "@react-navigation/native";
import React, { useEffect } from "react";
import Home from "./screens/Home/Home";
import TabBarIcon from "./components/TabBarIcon/TabBarIcon";
import { useFonts } from "expo-font";
import * as SplashScreen from "expo-splash-screen";
import { FontAwesome } from "@expo/vector-icons";

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
        console.log("An error occurred fetching the font");
        console.log(fontError);
      }
    }
  }, [fontsLoaded, fontError]);

  if (!fontsLoaded && !fontError) {
    return null;
  }

  return (
    <NavigationContainer>
      <Tab.Navigator
        screenOptions={({ route }) => ({
          tabBarIcon: ({ focused }) => {
            let iconName: keyof typeof FontAwesome.glyphMap = "fire";

            return (
              <TabBarIcon
                focused={focused}
                iconName={iconName}
                Icon={FontAwesome}
              />
            );
          },
        })}
      >
        <Tab.Screen name="Home" component={Home} />
      </Tab.Navigator>
    </NavigationContainer>
  );
};

export default App;
