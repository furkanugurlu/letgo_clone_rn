import { View, Text, StyleSheet, TouchableOpacity } from "react-native";
import React, { FC } from "react";
import { AntDesign } from "@expo/vector-icons";

interface ItemsHeaderPropsType {
  leftTitle: string;
  rightTitle: string;
  rightTitleOnPress?: () => void;
  onlyTitle?: boolean;
}
const ItemsHeader: FC<ItemsHeaderPropsType> = ({
  leftTitle,
  rightTitle,
  rightTitleOnPress,
  onlyTitle,
}) => {
  return (
    <View style={styles.currentAdsWrapper}>
      <Text
        style={[
          styles.adsLeftTitle,
          {
            fontSize: onlyTitle ? 18 : 15,
          },
        ]}
      >
        {leftTitle}
      </Text>
      {!onlyTitle && (
        <TouchableOpacity
          onPress={rightTitleOnPress}
          style={styles.adsRightWrapper}
        >
          <Text style={styles.adsRightTitle}>{rightTitle}</Text>
          <AntDesign name="right" size={18} color={"#F24E61"} />
        </TouchableOpacity>
      )}
    </View>
  );
};

export default ItemsHeader;

const styles = StyleSheet.create({
  currentAdsWrapper: {
    flexDirection: "row",
    paddingHorizontal: "4%",
    justifyContent: "space-between",
    alignItems: "center",
    paddingBottom: 10,
  },
  adsLeftTitle: {
    fontWeight: "bold",
  },
  adsRightWrapper: {
    flexDirection: "row",
    alignItems: "center",
  },
  adsRightTitle: {
    fontWeight: "bold",
    fontSize: 14,
    color: "#F24E61",
  },
});
