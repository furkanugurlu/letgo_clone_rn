import { View, StyleSheet, ScrollView } from "react-native";
import React, { FC } from "react";
import ShowcaseItem from "./ShowcaseItem";
import ItemsHeader from "./ItemsHeader";
import { Prodcuts } from "../types/products";

interface ShowcaseWrapperPropsType {
  products: Prodcuts[];
}
const ShowcaseWrapper: FC<ShowcaseWrapperPropsType> = ({ products }) => {
  return (
    <>
      <ItemsHeader rightTitle="Hepsini gör" leftTitle="Vitrin İlanları" />
      <View style={styles.showcaseWrapper}>
        <ScrollView horizontal showsHorizontalScrollIndicator={false}>
          {products.map((product) => (
            <ShowcaseItem key={product.id} product={product} />
          ))}
        </ScrollView>
      </View>
    </>
  );
};

export default ShowcaseWrapper;

const styles = StyleSheet.create({
  showcaseWrapper: {
    paddingHorizontal: "4%",
  },
});
