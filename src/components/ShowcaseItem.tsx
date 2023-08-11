import {
  View,
  Text,
  StyleSheet,
  Image,
  TouchableOpacity,
  Dimensions,
} from "react-native";
import React, { FC } from "react";
import { Prodcuts } from "../types/products";
import { Ionicons } from "@expo/vector-icons";

const { width } = Dimensions.get("screen");

interface ShowcaseItemPropsType {
  product: Prodcuts;
  type?: "main";
}
const ShowcaseItem: FC<ShowcaseItemPropsType> = ({ product, type }) => {
  const isMain = type == "main";
  return (
    <TouchableOpacity style={isMain ? styles.imageMain : styles.imageW}>
      <Image
        source={{ uri: product?.image }}
        style={isMain ? styles.imageMain : styles.image}
      />
      <TouchableOpacity style={styles.heart}>
        <Ionicons name="md-heart-sharp" size={24} color="white" />
      </TouchableOpacity>
      {!isMain && (
        <View style={styles.highlights}>
          <Text style={styles.highlightsT}>Öne Çıkanlar</Text>
        </View>
      )}
    </TouchableOpacity>
  );
};

export default ShowcaseItem;

const styles = StyleSheet.create({
  imageMainW: { width: width * 0.44 },
  imageW: { marginRight: 10, width: width * 0.24 },
  imageMain: {
    width: width * 0.445,
    height: width * 0.42,
    borderRadius: 10,
  },
  image: {
    width: width * 0.24,
    height: 100,
    borderRadius: 10,
  },
  heart: {
    position: "absolute",
    right: 5,
    bottom: 5,
  },
  highlights: {
    position: "absolute",
    top: 20,
    right: -25,
    backgroundColor: "white",
    paddingVertical: 3,
    paddingHorizontal: 20,
    transform: [{ rotate: "45deg" }],
  },
  highlightsT: {
    fontSize: 9,
    fontWeight: "600",
  },
});
