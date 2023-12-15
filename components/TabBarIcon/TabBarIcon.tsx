import React from "react";
import Colors from "../../constants/Colors";
import { FontAwesome } from "@expo/vector-icons";

interface TabBarIconProps {
  focused: boolean;
  //we can extends this to support other icons adding other types
  iconName: keyof typeof FontAwesome.glyphMap;
  Icon: typeof FontAwesome;
}

const TabBarIcon = ({ focused, iconName, Icon }: TabBarIconProps) => {
  return (
    <Icon
      name={iconName}
      size={26}
      color={focused ? Colors.tabIconSelected : Colors.tabIconDefault}
      style={{ marginBottom: -3 }}
    />
  );
};

export default TabBarIcon;
