import { View, Text, StyleSheet, ScrollView, Image } from "react-native";
import React, { useEffect, useState } from "react";

import letgoProducts from "../../assets/products";

import { AntDesign } from "@expo/vector-icons";
import { Prodcuts } from "../types/products";

const Home = () => {
  const [products, setProducts] = useState<Prodcuts[]>([]);
  useEffect(() => {
    setProducts(letgoProducts);
  }, []);
  return (
    <View style={styles.container}>
      <View style={styles.currentAdsWrapper}>
        <Text style={styles.adsLeftTitle}>Vitrin İlanları</Text>
        <View style={styles.adsRightWrapper}>
          <Text style={styles.adsRightTitle}>Hepsini gör</Text>
          <AntDesign name="right" size={20} color={"#F24E61"} />
        </View>
      </View>
      <ScrollView horizontal bounces>
        {products.map((product) => (
          <View>
            <Image
              source={{ uri: product?.image }}
              style={{ width: 100, height: 100 }}
            />
          </View>
        ))}
      </ScrollView>
    </View>
  );
};

export { Home };

const styles = StyleSheet.create({
  container: {
    marginHorizontal: "4%",
  },
  currentAdsWrapper: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  adsLeftTitle: {
    fontWeight: "bold",
    fontSize: 15,
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
