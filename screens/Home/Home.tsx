import React from "react";
import { SafeAreaView } from "react-native";
import Swiper from "react-native-deck-swiper";
import { Pic, HomeScreenPics } from "../../constants/Pics";
import Card from "../../components/Card/Card";
import styles from "./Styles";

const Home = () => {
  return (
    <SafeAreaView style={styles.container}>
      <Swiper
        cards={HomeScreenPics}
        renderCard={(card: Pic) => (
          <Card caption={card.caption} pic={card.pic} title={card.title} />
        )}
        infinite
        backgroundColor="white"
        cardHorizontalMargin={0}
        stackSize={2}
      />
    </SafeAreaView>
  );
};

export default Home;
