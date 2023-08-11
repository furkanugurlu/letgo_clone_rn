import {
  View,
  Text,
  StyleSheet,
  ScrollView,
  Image,
  TouchableOpacity,
  Dimensions,
} from "react-native";
import React, { FC, useState } from "react";
import { Category } from "../types/products";
import categoriesData from "../../assets/categories";

const { height, width } = Dimensions.get("screen");
interface CategoryFilterPropsType {}
const CategoryFilter: FC<CategoryFilterPropsType> = ({ navigation }: any) => {
  const [categories, setCategories] = useState<Category[]>([]);

  useState(() => {
    setCategories(categoriesData);
    return () => {
      setCategories([]);
    };
  });
  return (
    <ScrollView
      horizontal
      showsHorizontalScrollIndicator={false}
      style={styles.categoryW}
    >
      {categories.map((item) => {
        return (
          <TouchableOpacity
            onPress={() => {
              navigation.navigate("CategoryFiltreScreen");
            }}
            style={styles.ıtemW}
            key={item.id}
          >
            <Image source={item.src as any} style={styles.itemI} />
            <Text style={styles.itemT}>{item.name}</Text>
          </TouchableOpacity>
        );
      })}
    </ScrollView>
  );
};

export default CategoryFilter;
const styles = StyleSheet.create({
  categoryW: {
    height: height * 0.08,
    marginTop: 20,
    marginBottom: 22,
  },
  ıtemW: {
    alignItems: "center",
    justifyContent: "space-between",
    paddingHorizontal: 8,
  },
  itemI: {
    width: 55,
    height: 55,
    borderRadius: 27.5,
  },
  itemT: {
    fontSize: 11,
    color: "#757575",
  },
});
