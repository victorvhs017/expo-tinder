import React from "react";
import { ScrollView, View } from "react-native";
import { Text, Tile } from "react-native-elements";
import { SafeAreaView } from "react-native-safe-area-context";
import styles from "./Styles";
import { TopPicksScreenPics } from "../../constants/Pics";

const TopPicks = () => {
  return (
    <SafeAreaView>
      <ScrollView>
        <Text h2 h2Style={styles.h2Style}>
          Top Picks
        </Text>
        <Text h4 h4Style={styles.h4Style}>
          Featured profiles of the day, picked just for you
        </Text>
        <View style={styles.grid}>
          {TopPicksScreenPics.map(({ pic, title, caption }, i) => (
            <Tile
              imageSrc={pic}
              activeOpacity={0.9}
              title={title}
              titleStyle={styles.title}
              caption={caption}
              captionStyle={styles.caption}
              featured
              key={pic.toString()}
            />
          ))}
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default TopPicks;
