import { View, Text, StyleSheet } from "react-native";
import React from "react";

import { MaterialCommunityIcons } from "@expo/vector-icons";
import { Entypo } from "@expo/vector-icons";

const MessageNotification = () => {
  return (
    <View style={styles.container}>
      <View style={styles.leftW}>
        <MaterialCommunityIcons
          name="message-processing"
          size={24}
          color="#757575"
        />
        <Text style={styles.leftT}>Mesaj bildirimlerini aç</Text>
      </View>
      <Entypo name="chevron-right" size={30} color="#969696" />
    </View>
  );
};

export default MessageNotification;

const styles = StyleSheet.create({
  container: {
    width: "100%",
    justifyContent: "space-between",
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "#2c2c2c",
    height: 40,
    paddingHorizontal: 10,
  },
  leftW: {
    flexDirection: "row",
    alignItems: "center",
  },
  leftT: {
    color: "white",
    fontSize: 13,
    marginLeft: 8,
  },
});
