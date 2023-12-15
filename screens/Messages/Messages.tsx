import React from "react";
import { SafeAreaView, ScrollView } from "react-native";
import { Messages as MessagesList } from "../../constants/Messages";
import { Avatar, ListItem } from "react-native-elements";
import styles from "./Styles";

const Messages = () => {
  return (
    <SafeAreaView>
      <ScrollView>
        {MessagesList.map(({ pic, title, message }, i) => (
          <ListItem key={i}>
            <Avatar rounded source={pic} />
            <ListItem.Content>
              <ListItem.Title style={styles.title}>{title}</ListItem.Title>
              <ListItem.Subtitle style={styles.subtitle}>
                {message}
              </ListItem.Subtitle>
            </ListItem.Content>
            <ListItem.Chevron />
          </ListItem>
        ))}
      </ScrollView>
    </SafeAreaView>
  );
};

export default Messages;
