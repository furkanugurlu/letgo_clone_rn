import { View, Text, StyleSheet, ScrollView } from "react-native";
import React from "react";

import letgoProducts from "../../../assets/products";

import { Prodcuts } from "../../types/products";
import {
  CategoryFilter,
  MainProducts,
  MessageNotification,
  ShowcaseProducts,
} from "../../components";

const CategoryFiltreScreen = () => {
  const [products, setProducts] = React.useState<Prodcuts[]>([]);
  React.useEffect(() => {
    setProducts(letgoProducts);
  }, []);
  return (
    <ScrollView style={styles.container}>
      <MessageNotification />
      <MainProducts
        onlyTitle
        header="Arama sonuçları (2123123)"
        products={products}
      />
    </ScrollView>
  );
};

export { CategoryFiltreScreen };

const styles = StyleSheet.create({
  container: {},
});
