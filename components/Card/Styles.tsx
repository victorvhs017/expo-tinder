import { StyleSheet } from "react-native";
import Layout from "../../constants/Layout";

interface StylesProps {
  tabBarHeight: number;
}

const Styles = ({ tabBarHeight }: StylesProps) =>
  StyleSheet.create({
    imageContainer: {
      width: Layout.window.width - 30,
      height: Layout.window.height - tabBarHeight * 3,
      borderRadius: 20,
      overflow: "hidden",
    },
    title: {
      position: "absolute",
      left: 10,
      bottom: 30,
    },
    caption: {
      position: "absolute",
      left: 10,
      bottom: 10,
    },
    container: {
      flex: 1,
      alignItems: "center",
    },
  });

export default Styles;
