import { useBottomTabBarHeight } from "@react-navigation/bottom-tabs";
import React from "react";
import { Tile } from "react-native-elements";
import styles from "./Styles";

interface CardProps {
  pic: string;
  title: string;
  caption: string;
}

const Card = ({ pic, title, caption }: CardProps) => {
  const tabBarHeight = useBottomTabBarHeight();
  const cardStyles = styles({ tabBarHeight });

  return (
    <Tile
      imageSrc={pic}
      imageContainerStyle={cardStyles.imageContainer}
      activeOpacity={0.9}
      title={title}
      titleStyle={cardStyles.title}
      caption={caption}
      captionStyle={cardStyles.caption}
      containerStyle={cardStyles.container}
      featured
    />
  );
};

export default Card;
