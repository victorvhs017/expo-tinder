import React from "react";
import { SafeAreaView, View, Image } from "react-native";
import styles from "./Styles";
import { HomeScreenPics } from "../../constants/Pics";
import { randomNo } from "../../utils/randomNo";
import { Divider, SocialIcon, Text } from "react-native-elements";

const { pic, title } = HomeScreenPics[randomNo(1, HomeScreenPics.length)];

const Profile = () => {
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.imageContainer}>
        <Image source={pic} style={styles.image} />
      </View>
      <Text h4 h4Style={styles.name}>
        {title}
      </Text>
      <Text style={styles.desc}>Fashion Designer at Amelia & Co.</Text>
      <Divider style={styles.divider} />
      <Text style={styles.desc}>
        I love to travel. I have a cat named pickles. If he likes you, I
        probably will too.
      </Text>
      <Divider style={styles.divider} />
      <Text style={styles.desc}>Find me on Social here:</Text>
      <View style={styles.socialLinks}>
        <SocialIcon type="instagram" />
        <SocialIcon type="facebook" />
        <SocialIcon type="twitter" />
      </View>
    </SafeAreaView>
  );
};

export default Profile;
