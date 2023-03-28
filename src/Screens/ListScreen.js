import React from "react";
import { Button, Text, View, FlatList } from "react-native";
import SafeAreaView from "react-native-safe-area-view";
import ProductCard from "../Components/ProductCard";

const DATA = [
  {
    product_name: "Alu",
    product_ID: 1,
  },
  {
    product_name: "PIYAJ",
    product_ID: 2,
  },
  {
    product_name: "ROSHUN",
    product_ID: 3,
  },
];

const ListScreen = () => {
  return (
    <SafeAreaView>
      <FlatList
        data={DATA}
        renderItem={(elem) => <ProductCard />}
        // keyExtractor={(elem) => elem.item.product_ID}
      />
    </SafeAreaView>
  );
};

export default ListScreen;
