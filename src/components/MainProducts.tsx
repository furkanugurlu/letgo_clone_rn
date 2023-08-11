import { View, Text, StyleSheet } from "react-native";
import React, { FC } from "react";
import { Prodcuts } from "../types/products";
import ItemsHeader from "./ItemsHeader";
import ShowcaseItem from "./ShowcaseItem";

interface MainProductsPropsType {
  products: Prodcuts[];
  header?: string;
  onlyTitle?: boolean;
}
const MainProducts: FC<MainProductsPropsType> = ({
  products,
  header,
  onlyTitle,
}) => {
  return (
    <View style={{ marginTop: 20 }}>
      <ItemsHeader
        rightTitle="Düzelt"
        leftTitle={header || "Üsküdar"}
        onlyTitle={onlyTitle}
      />
      <View style={styles.mainWrapper}>
        <View style={styles.mainItemW}>
          {products.map((item) => {
            return <ShowcaseItem key={item.id} product={item} type="main" />;
          })}
        </View>
      </View>
    </View>
  );
};

export default MainProducts;

const styles = StyleSheet.create({
  mainWrapper: {
    alignSelf: "center",
  },
  mainItemW: {
    flexDirection: "row",
    alignItems: "flex-start",
    flexWrap: "wrap",
    width: "100%",
    columnGap: 15,
    rowGap: 12,
  },
});
