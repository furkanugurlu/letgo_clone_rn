import { StyleSheet, ScrollView, Button } from "react-native";
import React, { useEffect, useState } from "react";

import letgoProducts from "../../../assets/products";

import { Prodcuts } from "../../types/products";
import {
  CategoryFilter,
  MainProducts,
  MessageNotification,
  ShowcaseProducts,
} from "../../components";

const Home = ({ navigation }: any) => {
  const [products, setProducts] = useState<Prodcuts[]>([]);
  useEffect(() => {
    setProducts(letgoProducts);
  }, []);
  return (
    <ScrollView style={styles.container}>
      <MessageNotification />
      <CategoryFilter navigation={navigation} />
      <ShowcaseProducts products={products} />
      <MainProducts products={products} header={""} />
    </ScrollView>
  );
};

export { Home };

const styles = StyleSheet.create({
  container: {},
});
