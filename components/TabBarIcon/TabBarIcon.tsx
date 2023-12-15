import React from "react";
import Ionicons from "@expo/vector-icons/Ionicons";
import Colors from "../../constants/Colors";

interface TabBarIconProps {
  focused: boolean;
  iconName: keyof typeof Ionicons.glyphMap;
}

const TabBarIcon = ({ focused, iconName }: TabBarIconProps) => {
  return (
    <Ionicons
      name={iconName}
      size={26}
      color={focused ? Colors.tabIconSelected : Colors.tabIconDefault}
      style={{ marginBottom: -3 }}
    />
  );
};

export default TabBarIcon;
